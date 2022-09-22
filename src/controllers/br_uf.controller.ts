import { Body, Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { BrUfEntity } from 'src/entities/bf_uf.entity';
import { BrUfService } from 'src/services/br_uf.service';

@Controller('br_uf')
export class BrUfController {

    constructor(private readonly stateService: BrUfService) { }

    @Get(`/uf/:cd_uf`)
    public async getOne(@Param(`id`) cd_uf: string): Promise<BrUfEntity> {
        return await this.stateService.findOne(cd_uf);
    }

    @Get()
    public async getAll(): Promise<BrUfEntity[]>{
        return await this.stateService.findAll();
    }

}
