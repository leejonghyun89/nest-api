import { Connection, EntityRepository, Repository } from 'typeorm';

import { User } from 'user/entity/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}

export const UserRepositoryProvider = {
  provide: 'UserRepository',
  useFactory: (connection: Connection) =>
    connection.getCustomRepository(UserRepository),
  inject: [Connection],
};
