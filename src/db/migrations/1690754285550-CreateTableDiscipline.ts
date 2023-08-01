import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm"

export class CreateTableDiscipline1690754285550 implements MigrationInterface {

    readonly tableName: string = "disciplines";
    readonly fkName: string = "fk_course_discipline";
    readonly ifNotExists: boolean = true;

    public async up(queryRunner: QueryRunner): Promise<void> {

        const table = new Table({
            name: this.tableName,
            columns: [
                { name: "id", type: "BINARY(16)", isPrimary: true, isUnique: true },
                { name: "name", type: "varchar(50)", isUnique: true },
                { name: "course_id", type: "BINARY(16)" },
                { name: "createdAt", type: "timestamp" },
                { name: "updatedAt", type: "timestamp" },
                { name: "deletedAt", type: "timestamp" },
            ]
        });
        
        await queryRunner.createTable(table, this.ifNotExists);

        const fkCourse = new TableForeignKey({
            referencedColumnNames: ["id"],
            referencedTableName: "courses",
            columnNames: ["course_id"],
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
