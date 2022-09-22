import { Body, Controller, Get, Param } from '@nestjs/common';
import { StateEntity } from 'src/entities/state.entity';
import { StatesService } from '../services/states.service';

@Controller('states')
export class StatesController {

    constructor(private readonly stateService: StatesService) { }

    @Get(`/state/:cd_mun`)
    public async getOne(@Param(`id`) cd_mun: string): Promise<StateEntity> {
        return await this.stateService.findOne(cd_mun);
    }

    @Get()
    public async getAll(): Promise<StateEntity[]>{
        return await this.stateService.findAll();
    }


}
