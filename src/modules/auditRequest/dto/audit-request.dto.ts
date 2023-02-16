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
  is_published: boolean;

  @IsNotEmpty()
  platform: string;

  @IsNotEmpty()
  complexity: string;

  @IsNotEmpty()
  platform_id: string;

  @IsOptional()
  expected_date?: Date;

  @IsNotEmpty()
  loc: number;

  @IsNotEmpty()
  additional_info: string;

  @IsOptional()
  created_at?: Date;
}
