import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CourseTable1708230648080 implements MigrationInterface {

    readonly tableName: string = "course";
    readonly ifNotExists: boolean = true;

    public async up(queryRunner: QueryRunner): Promise<void> {
        const table = new Table({
            name: this.tableName,
            columns: [
                { name: "id", type: "varchar(36)", isPrimary: true, isUnique: true },
                { name: "name", type: "varchar(150)", isUnique: true },
            ]
        });
        await queryRunner.createTable(table, this.ifNotExists);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable(this.tableName)
    }

}
