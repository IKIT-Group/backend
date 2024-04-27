import { Logger, Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { OwnersModule } from './owners/owners.module';
import { PrismaModule, loggingMiddleware } from 'nestjs-prisma';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/static'
    }),
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
    PetsModule,
    OwnersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
