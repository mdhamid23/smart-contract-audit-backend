import { IsNotEmpty } from "class-validator";

export class DeleteWhiteListedDto {
  @IsNotEmpty()
  white_listed_address: string;

  @IsNotEmpty()
  signature: string;

  @IsNotEmpty()
  creator: string;
}
