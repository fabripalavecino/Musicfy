import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AlbumOutputDto } from './dto/album.output.dto';
import { CreateAlbumDto } from './dto/create-album.dto';
import { UpdateAlbumDto } from './dto/update-album.dto';
import { Album } from './entities/album.entity';


@Injectable()
export class AlbumService {
  constructor(
    @InjectRepository(Album)
    private readonly AlbumRepository: Repository<Album>,
  ){}

  async create(createAlbumDto: CreateAlbumDto) {
    try {
      let albums = await this.AlbumRepository.find();
      albums = albums.filter(album => album.deleteAt === null)
      if(albums.length < 20) {
        const album = this.AlbumRepository.create(createAlbumDto);
        return await this.AlbumRepository.save(album);
      }else {      
        throw new HttpException(
          {
            status: HttpStatus.BAD_REQUEST,
            error:
              'There already existed 20 albums, you cannot create a new album before delete one',
          },
          HttpStatus.BAD_REQUEST,
        );
      }    
    } catch (error) {
      throw error;
    }
  }


  async findAll() {
    try {
      const albums = await this.AlbumRepository.find();

      // TO DO: output DTO that cuts deleteAt attribute
      if(!albums) {
        throw new NotFoundException('Not albums have been found');
      }
      return albums;
    } catch (error) {
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const album = await this.AlbumRepository.findOne({ where: { id } });
      if(!album) {
        throw new NotFoundException(`Not Album found with id ${id}`);
      }
      return album;
    } catch (error) {
      throw error;
    }
  }

  async update(id: number, { name, musician, urlImage, year }: UpdateAlbumDto) {
    try {
      const album = await this.AlbumRepository.findOne({ where: { id } });

      if(!album) {
        throw new NotFoundException(`Not Album found with id ${id}`);
      }

      album.musician = musician || album.musician;
      album.name = name || album.name;
      album.urlImage = urlImage || album.urlImage;
      album.year = year || album.year;

      return await this.AlbumRepository.save(album);

    } catch (error) {
      throw error;
    }
  }

  async remove(id: number) {
    try {
      const deleteAlbum = await this.AlbumRepository.softDelete(id);
      if(!deleteAlbum.affected) {
        throw new NotFoundException(`Not Album found with id ${id}`)
      }
      return true;
    } catch (error) {
      throw error;
    }
  }
}
