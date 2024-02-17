import { Activity } from "src/activity/entities/activity.entity";
import { Course } from "src/course/entities/course.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Subject {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    semester: number;

    @ManyToOne(() => Course, course => course.subjects)
    course: Course;

    @OneToMany(() => Activity, activity => activity.subject)
    activities: Activity[];
}
