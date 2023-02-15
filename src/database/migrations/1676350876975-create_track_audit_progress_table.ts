import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createTrackAuditProgressTable1676350876975 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: "track_audit_progress",
              columns: [
                {
                  name: "id",
                  type: "int",
                  isPrimary: true,
                  isGenerated: true,
                  generationStrategy: "increment",
                },
                { name: "step_1", type: "varchar", isNullable: true },
                { name: "step_2", type: "varchar", isNullable: true },
                { name: "step_3", type: "varchar", isNullable: true },
                { name: "step_4", type: "varchar", isNullable: true },
                { name: "feedback", type: "varchar", isNullable: true },
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
        await queryRunner.dropTable("track_audit_progress", true);
    }

}
