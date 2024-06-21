import { Controller, Get, Post, Patch, Delete, Body, Param, UsePipes, ValidationPipe, ParseUUIDPipe } from '@nestjs/common';
import { Order, CreateOrderDto } from './orders.dto';
import { OrderService } from './orders.service';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('orders')
@Controller('orders')
@ApiResponse({ status: 500, description: 'Internal server error.'})
@UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
export class OrdersController {
    constructor(private readonly orderService: OrderService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Return all pets.', type: [Order] })
    findAll(): Promise<Order[]> {
        return this.orderService.findAll();
    }

    @Get(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Return one pet.', type: Order })
    findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Order> {
        return this.orderService.findOne(id);
    }

    @Post()
    @ApiResponse({ status: 200, description: 'Create one pet.', type: Order })
    create(@Body() createOrderDto: CreateOrderDto): Promise<Order> {
        return this.orderService.create(createOrderDto);
    }

    @Patch(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Update one pet.', type: Order })
    update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateOrderDto: Partial<CreateOrderDto>): Promise<Order> {
        return this.orderService.update(id, updateOrderDto);
    }

    @Delete(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Delete one pet.', type: Order })
    remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<Order> {
        return this.orderService.remove(id);
    }
}