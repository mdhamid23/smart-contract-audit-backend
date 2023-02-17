import { IsOptional } from "class-validator";

export class TrackAuditProgressDto{
    @IsOptional()
    id?: number;
  
    @IsOptional()
    uid: string;
  
    @IsOptional()
    key: string;
  
    @IsOptional()
    value: string;
}