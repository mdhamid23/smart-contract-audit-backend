import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class updateAuditReportsTable1676563871417 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "previous_audit_reports",
            new TableColumn({
                name: "is_published",
                type: "boolean",
                isNullable: true,
            })
        );
        await queryRunner.addColumn(
            "previous_audit_reports",
            new TableColumn({
                name: "document",
                type: "varchar",
                isNullable: true,
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("previous_audit_reports", "is_published");
        await queryRunner.dropColumn("previous_audit_reports", "document");
    }

}
