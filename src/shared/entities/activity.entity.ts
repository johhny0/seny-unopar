import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Discipline } from "./discipline.entity";


@Entity()
export class Activity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    name: string;

    @ManyToOne(() => Discipline, discipline => discipline.activities)
    discipline: Discipline

    @Column({ type: 'timestamp' })
    startDate: Date;

    @Column({ type: 'timestamp' })
    endDate: Date;

    @CreateDateColumn({ select: false })
    createdDate: Date;

    @UpdateDateColumn({ select: false })
    updatedDate: Date;

    @DeleteDateColumn({ select: false })
    deletedDate: Date;

}
