import {
  Column,
  Entity,
  PrimaryColumn,
} from 'typeorm';

import config from '@config/index';

const { db } = config.database.names;

@Entity({ database: db, name: 'vehicles' })
class Vehicles {
  @PrimaryColumn()
  id: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  state: string;
  timestamp: any;
}

export { Vehicles };
