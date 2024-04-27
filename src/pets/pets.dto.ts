import { Transform } from 'class-transformer';
import { IsDate, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum PetType {
    cat = 'cat',
    dog = 'dog',
}

enum Health {
    great = 'great',
    good = 'good',
    bad = 'bad',
    disabled = 'disabled',
}

enum Age {
    '6m' = '6m',
    '7-12m' = '7-12m',
    '1-5y' = '1-5y',
    '6y' = '6y',
}

const ToBoolean = () => Transform(({ obj, key }) => {
    const value = obj[key];
    if (typeof value === 'boolean') return value;
    if (typeof value === 'string') {
        if (['true', 'on', '1'].includes(value.toLowerCase())) return true;
        if (['false', 'off', '0'].includes(value.toLowerCase())) return false;
    }
    return undefined;
})

const ToDate = () => Transform(({ obj, key }) => {
    const value = obj[key];
    if (typeof value === 'object') return value;
    if (typeof value === 'string') {
        if (value === '6m') {
            let from = new Date();
            from.setMonth(from.getMonth() - 6);
            return [from, undefined]
        };
        if (value === '7-12m') {
            let from = new Date();
            from.setFullYear(from.getFullYear() - 1);
            let to = new Date();
            to.setMonth(to.getMonth() - 6);
            return [from, to]
        };
        if (value === '1-5y') {
            let from = new Date();
            from.setFullYear(from.getFullYear() - 5);
            let to = new Date();
            to.setFullYear(to.getFullYear() - 1);
            return [from, to];
        }
        if (value === '6y') {
            let to = new Date();
            to.setFullYear(to.getFullYear() - 6);
            return [undefined, to];
        }
    }
    return undefined;
})

export class Pet {
    @ApiProperty({ format: 'uuid' })
    id: string;

    @ApiProperty({ enum: PetType })
    type: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    image: string;

    @ApiProperty()
    gender: boolean;

    @ApiProperty()
    sterilized: boolean;

    @ApiProperty()
    hasPassport: boolean;

    @ApiProperty({ enum: Health })
    health: string;

    @ApiProperty({ format: 'date' })
    dateOfBirth: Date;
}

export class CreatePetDto {
    @ApiProperty({ required: true, enum: PetType })
    @IsEnum(PetType)
    type: string;

    @ApiProperty({ required: true })
    name: string;

    @ApiProperty()
    description: string;

    @ApiProperty()
    image: string;

    @ApiProperty({ required: true })
    gender: boolean;

    @ApiProperty({ required: true })
    sterilized: boolean;

    @ApiProperty({ required: true })
    hasPassport: boolean;

    @ApiProperty({ required: true, enum: Health })
    @IsEnum(Health)
    health: string;

    @ApiProperty({ required: true, format: 'date' })
    @IsDate()
    @Transform(({ value } : { value: string }) => new Date(value))
    dateOfBirth: Date;
}

export class SearchPetDto {
    @ApiProperty()
    @IsOptional()
    name: string;

    @ApiProperty({ enum: PetType })
    @IsEnum(PetType)
    @IsOptional()
    type: string;

    @ApiProperty()
    @ToBoolean()
    @IsOptional()
    gender: boolean;

    @ApiProperty()
    @ToBoolean()
    @IsOptional()
    sterilized: boolean;

    @ApiProperty()
    @ToBoolean()
    @IsOptional()
    hasPassport: boolean;

    @ApiProperty({ enum: Health })
    @IsEnum(Health)
    @IsOptional()
    health: string;

    @ApiProperty({ enum: Age })
    @ToDate()
    @IsOptional()
    age: [Date, Date];
}