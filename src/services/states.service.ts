import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from 'src/entities/state.entity';
import { State } from 'src/interfaces/state.interface';
import { Repository } from 'typeorm';

@Injectable()
export class StatesService {

    constructor(@InjectRepository(StateEntity) private stateRepository: Repository<StateEntity>) { }

    async findAll(): Promise<StateEntity[]>{
        return await this.stateRepository.find();
    }

    async create(state: State): Promise<StateEntity> {
        return await this.stateRepository.save(state);
    }
}
