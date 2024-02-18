import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class SubjectTable1708231358505 implements MigrationInterface {

    readonly tableName: string = "subject";
    readonly fkName: string = "fk_course_subject";
    readonly ifNotExists: boolean = true;

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: this.tableName,
            columns: [
                { name: "id", type: "varchar(36)", isPrimary: true, isUnique: true },
                { name: "name", type: "varchar(150)", isUnique: true },
                { name: "semester", type: "int(1)" },
                { name: "courseId", type: "varchar(36)" },
            ]
        });

        await queryRunner.createTable(table, this.ifNotExists);

        const fkCourse = new TableForeignKey({
            referencedColumnNames: ["id"],
            referencedTableName: "course",
            columnNames: ["courseId"],
            onDelete: "CASCADE",
            name: this.fkName
        });

        await queryRunner.createForeignKey(this.tableName, fkCourse);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(this.tableName, this.fkName)

        await queryRunner.dropTable(this.tableName)
    }

}
