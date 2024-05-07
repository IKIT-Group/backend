import { Injectable } from '@nestjs/common';
import { Product, CreateProductDto, SearchProductDto } from './products.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProductsService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(product: CreateProductDto): Promise<Product> {
        return this.prismaService.product.create({
            data: product
        }) as Promise<Product>;
    }

    async findOne(id: string): Promise<Product> {
        return this.prismaService.product.findUnique({
            where: {
                id: id
            }
        }) as Promise<Product>;
    }

    async findAll(query: SearchProductDto): Promise<Product[]> {
        return this.prismaService.product.findMany({
            where: {
                name: {
                    contains: query.name || '',
                    mode: 'insensitive'
                },
                type: query.type,
                price: {
                    lte: query.price
                }
            }
        }) as Promise<Product[]>;
    }

    async remove(id: string): Promise<Product> {
        return this.prismaService.product.delete({
            where: {
                id: id
            }
        }) as Promise<Product>;
    }

    async update(id: string, product: Partial<CreateProductDto>): Promise<Product> {
        return this.prismaService.product.update({
            where: {
                id: id
            },
            data: product
        }) as Promise<Product>;
    }
}
