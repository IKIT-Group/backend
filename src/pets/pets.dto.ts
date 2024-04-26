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

export class Pet {
    @ApiProperty({ format: 'uuid' })
    id: string;

    @ApiProperty({ enum: PetType })
    type: string;

    @ApiProperty()
    gender: boolean;

    @ApiProperty()
    name: string;

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
    gender: boolean;

    @ApiProperty({ required: true })
    name: string;

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
    @ApiProperty({ enum: PetType })
    @IsEnum(PetType)
    @IsOptional()
    type: string;

    @ApiProperty()
    @IsOptional()
    gender: boolean;

    @ApiProperty()
    @IsOptional()
    sterilized: boolean;

    @ApiProperty()
    @IsOptional()
    hasPassport: boolean;

    @ApiProperty({ enum: Health })
    @IsEnum(Health)
    @IsOptional()
    health: string;

    @ApiProperty({ format: 'date' })
    @IsDate()
    @Transform(({ value } : { value: string }) => new Date(value))
    @IsOptional()
    bornAfter: Date;
}