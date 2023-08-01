import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Course } from "./course.entity";
import { Activity } from "./activity.entity";


@Entity()
export class Discipline {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    name: string;

    @Column()
    semester: number;

    @ManyToOne(() => Course, course => course.disciplines)
    course: Course;

    @OneToMany(() => Activity, activity => activity.discipline, { cascade: true })
    activities: Activity[];

    @CreateDateColumn({ select: false })
    createdAt: Date;
    
    @UpdateDateColumn({ select: false })
    updatedAt: Date;
    
    @DeleteDateColumn({ select: false })
    deletedAt: Date;

}
