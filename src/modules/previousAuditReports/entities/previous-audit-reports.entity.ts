import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("previous_audit_reports")
export class PreviousAuditReports {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  logo_image: string;

  @Column()
  document?: string;

  @Column()
  project_name: string;

  @Column()
  access_code: string;

  @Column()
  benchmark: string;

  @Column()
  type: string;

  @Column()
  platform: string;

  @Column()
  is_published:boolean

  @Column({
    type: "timestamp",
    default: new Date(),
  })
  created_at?: Date;

  @Column({
    type: "timestamp",
    default: new Date(),
  })
  updated_at?: Date;
}
