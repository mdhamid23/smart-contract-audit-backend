import { IsNotEmpty, IsOptional } from "class-validator";

export class PreviousAuditReportsDto{
    @IsOptional()
    id?: number;
  
    @IsNotEmpty()
    logo_image: string;

    @IsOptional()
    document?: string;
  
    @IsNotEmpty()
    project_name: string;
  
    @IsNotEmpty()
    access_code: string;
  
    @IsNotEmpty()
    benchmark: string;
  
    @IsNotEmpty()
    type: string;
  
    @IsNotEmpty()
    platform: string;

    @IsNotEmpty()
    is_published:boolean
}