import { Injectable } from '@nestjs/common';
import { Order, CreateOrderDto } from './orders.dto';
import { PrismaService } from 'nestjs-prisma';
import { sendEmail } from '../email';

@Injectable()
export class OrderService {
    constructor(private readonly prismaService: PrismaService) {}

    async create(order: CreateOrderDto): Promise<Order> {
        const transaction = await this.prismaService.$transaction(async prisma => {
            const createdOrder = await prisma.order.create({
                data: {
                    email: order.email
                }
            });
            await prisma.orderItem.createMany({
                data: Object.keys(order.cart).map(productId => ({
                    orderId: createdOrder.id,
                    productId,
                    quantity: order.cart[productId]
                }))
            });
            await sendEmail({
                ...order,
                id: createdOrder.id
            });
            return {
                ...order,
                id: createdOrder.id
            };
        });
        return transaction;
    }

    async findOne(id: string): Promise<Order> {
        const order = await this.prismaService.order.findUnique({
            where: {
                id
            },
            include: {
                items: true
            }
        });
        return {
            ...order,
            items: undefined,
            cart: order.items.reduce((acc, item) => {
                acc[item.productId] = item.quantity;
                return acc;
            }, {})
        } as Order;
    }

    async findAll(): Promise<Order[]> {
        const orders = await this.prismaService.order.findMany({
            include: {
                items: true
            }
        });
        return orders.map(order => ({
            ...order,
            items: undefined,
            cart: order.items
                .reduce((acc, item) => {
                    acc[item.productId] = item.quantity;
                    return acc;
                }, {})
        }));
    }

    async remove(id: string): Promise<Order> {
        const order = await this.prismaService.order.delete({
            where: {
                id: id
            },
            include: {
                items: true
            }
        });
        return {
            ...order,
            items: undefined,
            cart: order.items.reduce((acc, item) => {
                acc[item.productId] = item.quantity;
                return acc;
            }, {})
        } as Order;
    }

    async update(id: string, order: Partial<CreateOrderDto>): Promise<Order> {
        const transaction = await this.prismaService.$transaction(async prisma => {
            const updatedOrder = await prisma.order.update({
                where: {
                    id: id
                },
                data: {
                    email: order.email
                }
            });

            const currentOrderItems = await prisma.orderItem.findMany({
                where: {
                    orderId: id
                }
            });

            for(const item of currentOrderItems) {
                if (order.cart[item.productId]) {
                    //
                    await prisma.orderItem.update({
                        where: {
                            id: item.id,
                        },
                        data: {
                            quantity: order.cart[item.productId]
                        }
                    });
                }
            }

            const updatedOrderItems = await prisma.orderItem.findMany({
                where: {
                    orderId: id
                }
            });

            return {
                ...updatedOrder,
                cart: updatedOrderItems.reduce((acc, item) => {
                    acc[item.productId] = item.quantity;
                    return acc;
                }, {})
            };
        });
        return transaction;
    }
}
