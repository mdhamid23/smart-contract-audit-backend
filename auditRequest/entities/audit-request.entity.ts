import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("audit_requests")
export class User {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    project_name: string;

    @Column()
    contract_type: string;
    
    @Column()
    blockchain_frame: string;

    @Column()
    number_of_smart_contract: number;

    @Column()
    project_link: string;

    @Column()
    has_document: boolean;

    @Column()
    platform: object;

    @Column()
    platform_id: number;

    @Column()
    expected_date: Date;

    @Column()
    LOC: string;

    @Column()
    additional_info: string;

    @Column({
        type: "timestamp",
        default: new Date()
    })
    created_at?: Date;

    @Column({
        type: "timestamp",
        default: new Date()
    })
    updated_at?: Date;

}