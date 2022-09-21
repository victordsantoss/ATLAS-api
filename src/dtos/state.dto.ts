import { ApiProperty } from "@nestjs/swagger";

export class StateDto {
    @ApiProperty()
    CD_MUN: string;

    @ApiProperty()
    NM_MUN: string; 
    
    @ApiProperty()
    SIGLA_UF: string; 

    @ApiProperty()
    AREA_KM2: number;

    @ApiProperty()
    geom: number;
}