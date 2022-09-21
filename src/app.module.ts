import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { StatesModule } from './modules/states.module';

@Module({
  imports: [
    DatabaseModule,
    StatesModule
  ],
})
export class AppModule { }
