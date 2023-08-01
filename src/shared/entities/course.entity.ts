import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Discipline } from "./discipline.entity";


@Entity()
export class Course {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => Discipline, discipline => discipline.course, { cascade: true })
    disciplines: Discipline[];

    @CreateDateColumn({ select: false })
    createdAt: Date;

    @UpdateDateColumn({ select: false })
    updatedAt: Date;

    @DeleteDateColumn({ select: false })
    deletedAt: Date;

}
