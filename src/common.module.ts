import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SampleModule } from 'sample/module/sample.module';
import { UserModule } from 'user/module/user.module';
import { typeOrmConfig } from './config/typeOrmConfig';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule, SampleModule],
})
export class CommonModule {}
