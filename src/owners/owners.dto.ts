import { Transform } from 'class-transformer';
import { IsEnum, IsPhoneNumber, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum ActivityType {
    student = 'student',
    working = 'working',
    allowance = 'allowance',
    pensioner = 'pensioner'
}

export class Owner {
    @ApiProperty({ format: 'uuid' })
    id: string;

    @ApiProperty()
    name: string;

    @ApiProperty()
    age: number;

    @ApiProperty({ format: 'phone', example: '+79136969696' })
    phone: string;

    @ApiProperty({ format: 'email', example: 'user@mail.com' })
    email: string;

    @ApiProperty({ enum: ActivityType })
    activity: string;

    @ApiProperty({ format: 'uuid' })
    petId: string;

    @ApiProperty()
    livesAlone: string;

    @ApiProperty()
    hadPets: string;

    @ApiProperty()
    hasPets: string;

    @ApiProperty()
    selfWalking: boolean;

    @ApiProperty()
    canPay: boolean;
}

export class CreateOwnerDto {
    @ApiProperty({ required: true })
    name: string;

    @ApiProperty({ required: true })
    age: number;

    @ApiProperty({ required: true })
    @IsPhoneNumber()
    phone: string;

    @ApiProperty({ required: true })
    @IsEmail()
    email: string;

    @ApiProperty({ required: true, enum: ActivityType })
    @IsEnum(ActivityType)
    activity: string;

    @ApiProperty({ required: true, format: 'uuid' })
    petId: string;

    @ApiProperty({ required: true })
    livesAlone: string;

    @ApiProperty({ required: true })
    hadPets: string;

    @ApiProperty({ required: true })
    hasPets: string;

    @ApiProperty({ required: true })
    selfWalking: boolean;

    @ApiProperty({ required: true })
    canPay: boolean;
}