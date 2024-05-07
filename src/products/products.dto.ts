import { IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum ProductType {
    food = 'food',
    care = 'care',
    accessory = 'accessory',
    toy = 'toy'
}

export class Product {
    @ApiProperty({ format: 'uuid' })
    id: string;

    @ApiProperty({ enum: ProductType })
    type: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    price: number
}

export class CreateProductDto {
    @ApiProperty({ required: true, enum: ProductType })
    @IsEnum(ProductType)
    type: string;

    @ApiProperty({ required: true })
    name: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    price: number
}

export class SearchProductDto {
    @ApiProperty({ enum: ProductType })
    @IsEnum(ProductType)
    @IsOptional()
    type: string;

    @ApiProperty()
    @IsOptional()
    name: string;

    @ApiProperty()
    price: number
}