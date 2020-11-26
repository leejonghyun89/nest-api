import { Controller, Get, Param, Post } from '@nestjs/common';

import { SampleService } from 'sample/service/sample.service';

@Controller('sample')
export class SampleController {
  constructor(private readonly sampleService: SampleService) {}

  @Post()
  public async createSample() {
    return this.sampleService.createSample();
  }

  @Get(':sampleName')
  public async getSampleBySampleName(@Param('sampleName') sampleName: string) {
    return this.sampleService.getSampleBySampleName(sampleName);
  }
}
