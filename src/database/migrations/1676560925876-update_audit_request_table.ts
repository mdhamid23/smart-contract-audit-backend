import { MigrationInterface, QueryRunner, TableColumn } from "typeorm"

export class updateAuditRequestTable1676560925876 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "audit_requests",
            new TableColumn({
              name: "platform_id",
              type: "int",
              isNullable: true,
            }),
            new TableColumn({
                name: "platform_id",
                type: "varchar",
                isNullable: true,
              }),
    )}

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            "audit_requests",
            new TableColumn({
              name: "platform_id",
              type: "varchar",
              isNullable: true,
            }),
            new TableColumn({
                name: "platform_id",
                type: "int",
                isNullable: true,
              }),
    )
    }

}
