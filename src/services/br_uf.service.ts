import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrUfEntity } from 'src/entities/bf_uf.entity';

@Injectable()
export class BrUfService {

    constructor(@InjectRepository(BrUfEntity) private stateRepository: Repository<BrUfEntity>) { }

    async findAll(): Promise<BrUfEntity[]> {
        return await this.stateRepository.find();
    }

    async findOne(CD_UF: string): Promise<BrUfEntity> {
        return await this.stateRepository.findOne({ where: { CD_UF } });
    }

}
