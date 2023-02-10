import { IsNotEmpty, IsOptional } from "class-validator";

export class UpdateWhiteListedDto {
  @IsOptional()
  id?: number;

  @IsNotEmpty()
  white_listed_address: string;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  is_active: boolean;

  @IsOptional()
  updated_at?: Date;

  @IsNotEmpty()
  signature: string;

  @IsNotEmpty()
  creator: string;
}
