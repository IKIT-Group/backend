import { Controller, Get, Post, Patch, Delete, Body, Param, UsePipes, ValidationPipe, ParseUUIDPipe } from '@nestjs/common';
import { Owner, CreateOwnerDto } from './owners.dto';
import { OwnerService } from './owners.service';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('owners')
@Controller('owners')
@ApiResponse({ status: 500, description: 'Internal server error.'})
@UsePipes(new ValidationPipe({ transform: true, transformOptions: { enableImplicitConversion: true } }))
export class OwnersController {
    constructor(private readonly ownerService: OwnerService) { }

    @Get()
    @ApiResponse({ status: 200, description: 'Return all pets.', type: [Owner] })
    findAll(): Promise<Owner[]> {
        return this.ownerService.findAll();
    }

    @Get(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Return one pet.', type: Owner })
    findOne(@Param('id', new ParseUUIDPipe()) id: string): Promise<Owner> {
        return this.ownerService.findOne(id);
    }

    @Post()
    @ApiResponse({ status: 200, description: 'Create one pet.', type: Owner })
    create(@Body() createOwnerDto: CreateOwnerDto): Promise<Owner> {
        return this.ownerService.create(createOwnerDto);
    }

    @Patch(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Update one pet.', type: Owner })
    update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateOwnerDto: Partial<CreateOwnerDto>): Promise<Owner> {
        return this.ownerService.update(id, updateOwnerDto);
    }

    @Delete(':id')
    @ApiParam({ name: 'id', format: 'uuid' })
    @ApiResponse({ status: 200, description: 'Delete one pet.', type: Owner })
    remove(@Param('id', new ParseUUIDPipe()) id: string): Promise<Owner> {
        return this.ownerService.remove(id);
    }
}