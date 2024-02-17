import { Subject } from "src/subject/entities/subject.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @OneToMany(() => Subject, subject => subject.course, { cascade: true })
    subjects: Subject[];
}
