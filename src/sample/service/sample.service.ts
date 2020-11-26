import { Injectable } from '@nestjs/common';

import { Sample } from 'sample/entitiy/sample.entity';

@Injectable()
export class SampleService {
  constructor() {}

  public async createSample(): Promise<string> {
    const createSample = new Sample();
    createSample.sampleName = '테스트';

    const sampe = await createSample.save();

    return sampe.sampleName;
  }

  public async getSampleBySampleName(sampleName: string): Promise<Sample[]> {
    return await Sample.findBySampleName(sampleName);
  }
}
