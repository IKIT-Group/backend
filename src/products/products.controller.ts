import { Controller, Get, Post, Patch, Delete, Body, Param, UsePipes, ValidationPipe, ParseUUIDPipe, Query, ParseBoolPipe } from '@nestjs/common';
import { Product, CreateProductDto, SearchProductDto } from './products.dto';
import { ProductsService } from './products.service';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
@ApiResponse({ status: 500, description: 'Internal server error.' })
@UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Return all products.', type: [Product] })
    findAll(@Query(new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true }
    })) query: SearchProductDto): Promise<Product[]> {
        return this.productsService.findAll(query);
    }

    @Get(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Return one product.', type: Product })
    findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Product> {
        return this.productsService.findOne(id);
    }

    @Post()
    @ApiResponse({ status: 200, description: 'Create one product.', type: Product })
    create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productsService.create(createProductDto);
    }

    @Patch(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Update one product.', type: Product })
    update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateProductDto: Partial<CreateProductDto>): Promise<Product> {
        return this.productsService.update(id, updateProductDto);
    }

    @Delete(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Delete one product.', type: Product })
    remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<Product> {
        return this.productsService.remove(id);
    }
}