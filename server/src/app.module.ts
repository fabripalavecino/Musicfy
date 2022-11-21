import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlbumModule } from './album/album.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from './album/entities/album.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const pgConnection = {
          type: config.get('TYPEORM_CONNECTION'),
          host: config.get('TYPEORM_HOST'),
          port: parseInt(config.get('TYPEORM_PORT')),
          database: config.get('TYPEORM_DATABASE'),
          username: config.get('TYPEORM_USERNAME'),
          password: config.get<string>('TYPEORM_PASSWORD'),
          entities: [Album],
          autoLoadEntities: true,
          synchronize:
            config.get('TYPEORM_SYNCHRONIZE') == 'true' ? true : false,
          logging: config.get('TYPEORM_LOGGING'),
          migrations: [config.get('TYPEORM_MIGRATIONS')],
          migrationsDir: config.get('TYPEORM_MIGRATIONS_DIR'),
          migrationsRun: true,
        };
        console.log(pgConnection);
        return pgConnection;
      },
    }),
    AlbumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
