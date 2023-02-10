import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createRequestAuditTable1676034394167
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "audit_requests",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          { name: "project_name", type: "varchar", isNullable: false },
          { name: "contract_type", type: "varchar", isNullable: false },
          { name: "blockchain_frame", type: "varchar", isNullable: false },
          { name: "number_of_smart_contract", type: "int", isNullable: false },
          { name: "project_link", type: "varchar", isNullable: false },
          { name: "has_document", type: "boolean", isNullable: false },
          { name: "platform", type: "json", isNullable: false },
          { name: "platform_id", type: "int", isNullable: false },
          { name: "expected_date", type: "timestamp", isNullable: false },
          { name: "loc", type: "int", isNullable: false },
          { name: "additional_info", type: "varchar", isNullable: false },
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
    await queryRunner.dropTable("audit_requests", true);
  }
}
