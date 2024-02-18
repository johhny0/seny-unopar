import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class ActivityTable1708231507343 implements MigrationInterface {

    readonly tableName: string = "activity";
    readonly fkName: string = "fk_subject_activity";
    readonly ifNotExists: boolean = true;

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: this.tableName,
            columns: [
                { name: "id", type: "varchar(36)", isPrimary: true, isUnique: true },
                { name: "name", type: "varchar(150)" },
                { name: "subjectId", type: "varchar(36)" },
                { name: "startDate", type: "Date" },
                { name: "endDate", type: "Date" },
                { name: "done", type: "TINYINT(1)", default: false }
            ]
        });

        await queryRunner.createTable(table, this.ifNotExists);

        const fkSubject = new TableForeignKey({
            referencedColumnNames: ["id"],
            referencedTableName: "subject",
            columnNames: ["subjectId"],
            onDelete: "CASCADE",
            name: this.fkName
        });

        await queryRunner.createForeignKey(this.tableName, fkSubject)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName)
    }

}
