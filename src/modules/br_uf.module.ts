import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrUfService } from 'src/services/br_uf.service';
import { BrUfController } from 'src/controllers/br_uf.controller';
import { BrUfEntity } from 'src/entities/bf_uf.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BrUfEntity])],
  providers: [BrUfService],
  controllers: [BrUfController]
})
export class BrUfModule {}
