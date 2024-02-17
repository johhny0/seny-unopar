export class CreateSubjectDto {
    name: string;
    semester: number;
    course: CreateSubjectCourseDto;
}

class CreateSubjectCourseDto {
    id: string;
}
