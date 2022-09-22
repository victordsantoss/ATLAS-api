import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'br_uf' })
export class BrUfEntity {

    @PrimaryGeneratedColumn({ name: 'CD_UF' })
    CD_UF: string;

    @Column({ name: 'POPULATION' })
    POPULATION: number;

    @Column({ name: 'NM_UF' })
    NM_UF: string;

    @Column({ name: 'SIGLA_UF', length: 2 })
    SIGLA_UF: string;

    @Column({ name: 'NM_REGIAO', length: 14 })
    NM_REGIAO: string;

    @Column({ name: 'geom' })
    geom: string;
}