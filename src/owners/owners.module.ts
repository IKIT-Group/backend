import { Module } from '@nestjs/common';
import { OwnersController } from './owners.controller';
import { OwnerService } from './owners.service';

@Module({
    controllers: [OwnersController],
    providers: [OwnerService],
})
export class OwnersModule {}
