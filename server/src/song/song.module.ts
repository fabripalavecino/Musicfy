import { Module } from '@nestjs/common';
import { SongService } from './song.service';
import { SongController } from './song.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Album } from 'src/album/entities/album.entity';
import { Song } from './entities/song.entity';
import { AlbumService } from 'src/album/album.service';

@Module({
  imports: [TypeOrmModule.forFeature([Album, Song])],
  controllers: [SongController],
  providers: [SongService, AlbumService]
})
export class SongModule {}
