import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'states' })
export class StateEntity {

    @PrimaryGeneratedColumn({ name: 'CD_MUN' })
    CD_MUN: string;

    @Column({ name: 'NM_MUN' })
    NM_MUN: string;

    @Column({ name: 'SIGLA_UF', length: 2 })
    SIGLA_UF: string;

    @Column({ name: 'AREA_KM2' })
    AREA_KM2: number;

    @Column({ name: 'geom' })
    geom: string;
}