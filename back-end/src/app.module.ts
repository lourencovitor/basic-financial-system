import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './configs/typeorm.config';
import { UsersModule } from './users/users.module';
import { EntryandExitModule } from './entryandExit/entryandExit.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UsersModule,
    EntryandExitModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
