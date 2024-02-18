import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class ActivityTable1708231507343 implements MigrationInterface {

    readonly tableName: string = "activity";
    readonly fkName: string = "fk_subject_activity";
    readonly ifNotExists: boolean = true;

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: this.tableName,
            columns: [
                { name: "id", type: "BINARY(16)", isPrimary: true, isUnique: true },
                { name: "name", type: "varchar(50)", isUnique: true },
                { name: "subject_id", type: "BINARY(16)" },
            ]
        });

        await queryRunner.createTable(table, this.ifNotExists);

        const fkSubject = new TableForeignKey({
            referencedColumnNames: ["id"],
            referencedTableName: "subject",
            columnNames: ["subject_id"],
            onDelete: "CASCADE",
            name: this.fkName
        });

        await queryRunner.createForeignKey(this.tableName, fkSubject)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName)
    }

}
