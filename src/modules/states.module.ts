import { Module } from '@nestjs/common';
import { StatesService } from '../services/states.service';
import { StatesController } from '../controllers/states.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateEntity } from 'src/entities/state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity])],
  providers: [StatesService],
  controllers: [StatesController]
})
export class StatesModule {}
