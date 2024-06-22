import { IsEmail, registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export type Cart = {[id: string]: number};

const IsCart = (validationOptions?: ValidationOptions) => {
    return (object: any, propertyName: string) => {
        registerDecorator({
            name: 'isCart',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    if (typeof value !== 'object'
                    || value == null
                    || value == undefined
                    ) return false;

                    if (Object.keys(value).length === 0) return false;

                    return Object.keys(value)
                        .every(val => typeof val === 'string' && typeof value[val] === 'number');
                }
            }
        });
    }
}

export class Order {
    @ApiProperty({ format: 'uuid' })
    id: string;

    @ApiProperty({ format: 'email', example: 'user@mail.com' })
    email: string;

    @ApiProperty()
    cart: Cart
}

export class CreateOrderDto {
    @ApiProperty({ required: true })
    @IsEmail()
    email: string;

    @ApiProperty({ required: true })
    @IsCart({ message: 'Cart must be non-empty object with string keys and number values' })
    cart: Cart;
}
