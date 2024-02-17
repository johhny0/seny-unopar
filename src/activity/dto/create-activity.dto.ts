export class CreateActivityDto {
    name: string;
    startDate: Date;
    endDate: Date;
    subject: CreateActivitySubjectDto;
}

class CreateActivitySubjectDto {
    id: string;
}
