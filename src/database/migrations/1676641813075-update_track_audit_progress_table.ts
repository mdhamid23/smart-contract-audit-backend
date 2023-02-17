import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class updateTrackAuditProgressTable1676641813075 implements MigrationInterface {

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
                {
                    name:"uid",
                    type:"varchar",
                    isUnique:false,
                },
                { name: "key", type: "varchar", isNullable: true },
                { name: "value", type: "varchar", isNullable: true },
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
    }

}
