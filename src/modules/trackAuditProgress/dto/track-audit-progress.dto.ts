import { IsOptional } from "class-validator";

export class TrackAuditProgressDto{
    @IsOptional()
    id?: number;
  
    @IsOptional()
    step_1: string;
  
    @IsOptional()
    step_2: string;
  
    @IsOptional()
    step_3: string;
  
    @IsOptional()
    step_4: string;
  
    @IsOptional()
    feedback?: string;
}