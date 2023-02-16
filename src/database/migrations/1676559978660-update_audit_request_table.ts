import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class updateAuditRequestTable1676559978660 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "audit_requests",
            new TableColumn({
                name: "complexity",
                type: "varchar",
                isNullable: true,
            })
        );
        await queryRunner.addColumn(
            "audit_requests",
            new TableColumn({
                name: "is_published",
                type: "boolean",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("audit_requests", "complexity");
        await queryRunner.dropColumn("audit_requests", "is_published");
    }

}
