import { Song } from "src/song/entities/song.entity";
import { Column, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Album {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column()
    musician: string;
    @Column()
    year: number;
    @Column()
    urlImage: string;
    @DeleteDateColumn({ nullable: true })
    deleteAt: Date;
    @OneToMany(() => Song, song => song.album)
    songs: Song[]
}
