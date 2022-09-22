import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrUfEntity } from 'src/entities/bf_uf.entity';
import { StateEntity } from 'src/entities/state.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: '12345',
        database: 'postgres',
        entities: [StateEntity, BrUfEntity],
        synchronize: false
    }),]
})
export class DatabaseModule { }
