import { Logger, Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { PrismaModule, loggingMiddleware } from 'nestjs-prisma';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        middlewares: [
          loggingMiddleware({
            logger: new Logger('PrismaMiddleware'),
            logLevel: 'log',
          }),
        ],
      },
    }),
    PetsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
