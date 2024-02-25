import { Controller, Get, Post, Patch, Delete, Body, Param, UsePipes, ValidationPipe, ParseUUIDPipe } from '@nestjs/common';
import { Pet, CreatePetDto } from './pets.dto';
import { PetsService } from './pets.service';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('pets')
@Controller('pets')
@UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
export class PetsController {
    constructor(private readonly petsService: PetsService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Return all pets.', type: [Pet] })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    findAll(): Promise<Pet[]> {
        return this.petsService.findAll();
    }

    @Get(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Return one pet.', type: Pet })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Pet> {
        return this.petsService.findOne(id);
    }

    @Post()
    @ApiResponse({ status: 200, description: 'Create one pet.', type: Pet })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    create(@Body() createPetDto: CreatePetDto): Promise<Pet> {
        return this.petsService.create(createPetDto);
    }

    @Patch(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Update one pet.', type: Pet })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updatePetDto: Partial<CreatePetDto>): Promise<Pet> {
        return this.petsService.update(id, updatePetDto);
    }

    @Delete(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Delete one pet.', type: Pet })
    @ApiResponse({ status: 500, description: 'Internal server error.' })
    remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<Pet> {
        return this.petsService.remove(id);
    }
}