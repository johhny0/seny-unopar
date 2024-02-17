import { Subject } from "src/subject/entities/subject.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Activity {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column({ type: "date" })
    startDate: Date;

    @Column({ type: "date" })
    endDate: Date;

    @Column({ type: "bool", default: false })
    done: boolean;

    @ManyToOne(() => Subject, subject => subject.activities)
    subject: Subject;
}
