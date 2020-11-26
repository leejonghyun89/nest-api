import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SampleController } from 'sample/controller/sample.controller';
import { Sample } from 'sample/entitiy/sample.entity';
import { SampleService } from 'sample/service/sample.service';

@Module({
  imports: [TypeOrmModule.forFeature([Sample])],
  controllers: [SampleController],
  providers: [SampleService],
})
export class SampleModule {}
