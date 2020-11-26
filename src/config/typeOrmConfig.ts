import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mariadb',
  host: 'localhost',
  port: 3307,
  username: 'nest_db',
  password: 'whdgus12',
  database: 'nest_db',
  entities: [__dirname.replace('config', '') + '/**/*.entity{.ts,.js}'],
  synchronize: true, // entities에 속해 있는 Entity와 DB 정보가 다를 때 자동으로 마이그레이션
  logging: ['query', 'error'],
};
