import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("track_audit_progress")
export class TrackAuditProgress {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  uid: string;

  @Column()
  key: string;

  @Column()
  value: string;

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
