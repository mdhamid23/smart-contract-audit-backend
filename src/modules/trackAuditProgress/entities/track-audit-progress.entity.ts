import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("track_audit_progress")
export class TrackAuditProgress {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  step_1: string;

  @Column()
  step_2: string;

  @Column()
  step_3: string;

  @Column()
  step_4: string;

  @Column()
  feedback?: string;

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
