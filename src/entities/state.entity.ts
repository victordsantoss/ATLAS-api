import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StateEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    CD_MUN: string;

    @Column()
    NM_MUN: string; 
    
    @Column()
    SIGLA_UF: string; 

    @Column()
    AREA_KM2: number;

    @Column()
    geom: number;
}