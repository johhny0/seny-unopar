import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTableCourse1690753673115 implements MigrationInterface {

    readonly tableName: string = "courses";
    readonly ifNotExists: boolean = true;

    public async up(queryRunner: QueryRunner): Promise<void> {

        const table = new Table({
            name: this.tableName,
            columns: [
                { name: "id", type: "BINARY(16)", isPrimary: true, isUnique: true },
                { name: "name", type: "varchar(50)", isUnique: true },
                { name: "createdAt", type: "timestamp" },
                { name: "updatedAt", type: "timestamp" },
                { name: "deletedAt", type: "timestamp" },
            ]
        });
        await queryRunner.createTable(table, this.ifNotExists);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName)
    }
}
