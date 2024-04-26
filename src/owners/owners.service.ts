import { Injectable } from '@nestjs/common';
import { Owner, CreateOwnerDto } from './owners.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class OwnerService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(owner: CreateOwnerDto): Promise<Owner> {
        return this.prismaService.owner.create({
            data: owner
        }) as Promise<Owner>;
    }

    async findOne(id: string): Promise<Owner> {
        return this.prismaService.owner.findUnique({
            where: {
                id: id
            }
        }) as Promise<Owner>;
    }

    async findAll(): Promise<Owner[]> {
        return this.prismaService.owner.findMany() as Promise<Owner[]>;
    }

    async remove(id: string): Promise<Owner> {
        return this.prismaService.owner.delete({
            where: {
                id: id
            }
        }) as Promise<Owner>;
    }

    async update(id: string, owner: Partial<CreateOwnerDto>): Promise<Owner> {
        return this.prismaService.owner.update({
            where: {
                id: id
            },
            data: owner
        }) as Promise<Owner>;
    }
}
