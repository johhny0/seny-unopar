import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateTableActivity1690754294634 implements MigrationInterface {

    readonly tableName: string = "activities";
    readonly fkName: string = "fk_discipline_activity";
    readonly ifNotExists: boolean = true;

    public async up(queryRunner: QueryRunner): Promise<void> {

        const table = new Table({
            name: this.tableName,
            columns: [
                { name: "id", type: "BINARY(16)", isPrimary: true, isUnique: true },
                { name: "name", type: "varchar(50)", isUnique: true },
                { name: "discipline_id", type: "BINARY(16)" },
                { name: "createdAt", type: "timestamp" },
                { name: "updatedAt", type: "timestamp" },
                { name: "deletedAt", type: "timestamp" },
            ]
        });

        await queryRunner.createTable(table, this.ifNotExists);

        const fkCourse = new TableForeignKey({
            referencedColumnNames: ["id"],
            referencedTableName: "disciplines",
            columnNames: ["discipline_id"],
            onDelete: "CASCADE",
            name: this.fkName
        });
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName)
    }

}
