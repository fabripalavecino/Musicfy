import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ColumnNumericTransformer } from "src/utils/ColumnNumericTransformer";
import { Album } from "src/album/entities/album.entity";

@Entity()
export class Song {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name: string;
    @Column('decimal', { precision: 2, transformer: new ColumnNumericTransformer()})
    duration: number;
    @ManyToOne(() => Album, (album) => album.id)
    album: Album;
}
