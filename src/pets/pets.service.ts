import { Injectable } from '@nestjs/common';
import { Pet, CreatePetDto, SearchPetDto } from './pets.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class PetsService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(pet: CreatePetDto): Promise<Pet> {
        return this.prismaService.pet.create({
            data: pet
        }) as Promise<Pet>;
    }

    async findOne(id: string): Promise<Pet> {
        return this.prismaService.pet.findUnique({
            where: {
                id: id
            }
        }) as Promise<Pet>;
    }

    async findAll(query: SearchPetDto): Promise<Pet[]> {
        return this.prismaService.pet.findMany({
            where: {
                name: {
                    contains: query.name || '',
                    mode: 'insensitive'
                },
                type: query.type,
                gender: query.gender,
                sterilized: query.sterilized,
                hasPassport: query.hasPassport,
                health: query.health,
                dateOfBirth: {
                    gte: query.age?.[0],
                    lte: query.age?.[1],
                }
            }
        }) as Promise<Pet[]>;
    }

    async remove(id: string): Promise<Pet> {
        return this.prismaService.pet.delete({
            where: {
                id: id
            }
        }) as Promise<Pet>;
    }

    async update(id: string, pet: Partial<CreatePetDto>): Promise<Pet> {
        return this.prismaService.pet.update({
            where: {
                id: id
            },
            data: pet
        }) as Promise<Pet>;
    }
}
