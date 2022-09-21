import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateEntity } from 'src/entities/state.entity';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        username: 'postgres',
        password: 'admin123',
        database: 'postgres',
        entities: [StateEntity],
        synchronize: true
    }),]
})
export class DatabaseModule { }
