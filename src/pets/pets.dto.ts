import { Transform } from 'class-transformer';
import { IsDate, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum PetType {
    cat = 'cat',
    dog = 'dog',
}

export class Pet {
    @ApiProperty({ format: 'uuid' })
    id: string;

    @ApiProperty({ enum: PetType })
    type: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    breed: string;

    @ApiProperty({ format: 'date' })
    dateOfBirth: Date;
}

export class CreatePetDto {
    @ApiProperty({ required: true, enum: PetType })
    @IsEnum(PetType)
    type: string;

    @ApiProperty({ required: true })
    name: string;

    @ApiProperty({ required: true })
    breed: string;

    @ApiProperty({ required: true, format: 'date' })
    @IsDate()
    @Transform(({ value } : { value: string }) => new Date(value))
    dateOfBirth: Date;
}