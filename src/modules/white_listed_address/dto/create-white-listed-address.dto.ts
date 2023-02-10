import { IsNotEmpty } from "class-validator";

export class CreateWhiteListedDto {
  @IsNotEmpty()
  white_listed_address: string;

  @IsNotEmpty()
  role: string;

  @IsNotEmpty()
  is_active: boolean;

  @IsNotEmpty()
  signature: string;

  @IsNotEmpty()
  creator: string;
}
