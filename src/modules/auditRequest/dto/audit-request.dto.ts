import { IsNotEmpty, IsOptional } from "class-validator";
export class AuditRequestDto {
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  project_name: string;

  @IsNotEmpty()
  contract_type: string;

  @IsNotEmpty()
  blockchain_frame: string;

  @IsNotEmpty()
  number_of_smart_contract: number;

  @IsNotEmpty()
  project_link: string;

  @IsNotEmpty()
  has_document: boolean;

  @IsNotEmpty()
  platform: string;

  @IsNotEmpty()
  platform_id: number;

  @IsNotEmpty()
  expected_date?: Date;

  @IsNotEmpty()
  loc: number;

  @IsNotEmpty()
  additional_info: string;

  @IsOptional()
  created_at?: Date;
}
