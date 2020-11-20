import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 3307,
  username: 'nest_db',
  password: 'whdgus12',
  database: 'nest_db',
  entities: [__dirname.replace('config', '') + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  logging: ['query', 'error'],
};
