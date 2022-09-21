import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { StateDto } from 'src/dtos/state.dto';
import { StateEntity } from 'src/entities/state.entity';
import { StatesService } from '../services/states.service';

@Controller('states')
export class StatesController {

    constructor(private readonly stateService: StatesService) { }

    @Get()
    async getHello(): Promise<StateEntity[]>{
        return await this.stateService.findAll();
    }

    @Post()
    @ApiBody({type: StateDto})
    async create(@Body() state: StateDto): Promise<StateEntity>{
        return await this.stateService.create(state);
    }
}
