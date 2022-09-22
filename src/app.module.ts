import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { BrUfModule } from './modules/br_uf.module';
import { StatesModule } from './modules/states.module';

@Module({
  imports: [
    DatabaseModule,
    StatesModule,
    BrUfModule
  ],
})
export class AppModule { }
