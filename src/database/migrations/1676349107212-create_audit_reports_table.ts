import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createAuditReportsTable1676349107212 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "previous_audit_reports",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                { name: "logo_image", type: "varchar", isNullable: false },
                { name: "project_name", type: "varchar", isNullable: false },
                { name: "access_code", type: "varchar", isNullable: false },
                { name: "benchmark", type: "varchar", isNullable: false },
                { name: "type", type: "varchar", isNullable: false },
                { name: "platform", type: "varchar", isNullable: false },
                 {
                  name: "created_at",
                  type: "timestamp",
                  isNullable: false,
                  default: "CURRENT_TIMESTAMP(6)",
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  isNullable: false,
                  default: "CURRENT_TIMESTAMP(6)",
                },
              ],
            })
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("previous_audit_reports", true);
    }

}
