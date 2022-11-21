import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
