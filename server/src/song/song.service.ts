import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AlbumService } from 'src/album/album.service';
import { Repository } from 'typeorm';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Song } from './entities/song.entity';

@Injectable()
export class SongService {
  
  constructor(@InjectRepository(Song) 
  private readonly SongRepository: Repository<Song>,
  private readonly AlbumService: AlbumService
  ){}

  async create({ name, duration, album_id }: CreateSongDto) {
    try {
      const album = await this.AlbumService.findOne(album_id);
      const song =  this.SongRepository.create({
        name,
        duration,
        album
      })

      return await this.SongRepository.save(song);

    } catch (error) {
      throw error;
    }
  }

  async findAll() {
    try {
      const songs = await this.SongRepository.find();
      return songs;
    } catch (error) {
      throw error;
    }
  }

  async findSongsByAlbum(album_id) {
    try {
      const album = await this.AlbumService.findOne(album_id);
      const songs = await this.SongRepository.find({ where: { album }})
      return songs;
    } catch (error) {
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return `This action updates a #${id} song`;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
