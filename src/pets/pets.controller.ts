import { Controller, Get, Post, Patch, Delete, Body, Param, UsePipes, ValidationPipe, ParseUUIDPipe, Query, ParseBoolPipe } from '@nestjs/common';
import { Pet, CreatePetDto, SearchPetDto } from './pets.dto';
import { PetsService } from './pets.service';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('pets')
@Controller('pets')
@ApiResponse({ status: 500, description: 'Internal server error.' })
@UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
export class PetsController {
    constructor(private readonly petsService: PetsService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Return all pets.', type: [Pet] })
    findAll(@Query(new ValidationPipe({
        transform: true,
        transformOptions: { enableImplicitConversion: true }
    })) query: SearchPetDto): Promise<Pet[]> {
        return this.petsService.findAll(query);
    }

    @Get(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Return one pet.', type: Pet })
    findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Pet> {
        return this.petsService.findOne(id);
    }

    @Post()
    @ApiResponse({ status: 200, description: 'Create one pet.', type: Pet })
    create(@Body() createPetDto: CreatePetDto): Promise<Pet> {
        return this.petsService.create(createPetDto);
    }

    @Patch(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Update one pet.', type: Pet })
    update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updatePetDto: Partial<CreatePetDto>): Promise<Pet> {
        return this.petsService.update(id, updatePetDto);
    }

    @Delete(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Delete one pet.', type: Pet })
    remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<Pet> {
        return this.petsService.remove(id);
    }
}