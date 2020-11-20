import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'user/module/user.module';
import { typeOrmConfig } from './config/typeOrmConfig';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule],
})
export class CommonModule {}
