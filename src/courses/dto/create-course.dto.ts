import { Discipline } from "src/shared/entities/discipline.entity";

export class CreateCourseDto {
    name: string;
    disciplines: CreateDisciplineDto[];
}

export class CreateDisciplineDto{
    name: string;
    semester: number;
}
