import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from 'src/entities/state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatesService {

    constructor(@InjectRepository(StateEntity) private stateRepository: Repository<StateEntity>) { }

    async findAll(): Promise<StateEntity[]> {
        return await this.stateRepository.find();
    }

    async findOne(CD_MUN: string): Promise<StateEntity> {
        return await this.stateRepository.findOne({ where: { CD_MUN } });
    }

}
