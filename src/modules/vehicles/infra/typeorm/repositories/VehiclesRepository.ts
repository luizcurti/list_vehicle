import { IVehiclesRepository } from '@modules/vehicles/repositories/IVehiclesRepository';
import { GenericRepository } from '@shared/generic/infra/typeorm/repositories/GenericRepository';

import { Vehicles } from '../entities/Vehicles';
import config from '@config/index';

const { db } = config.database.names;

class VehiclesRepository
  extends GenericRepository<Vehicles>
  implements IVehiclesRepository
{
  constructor() {
    super(Vehicles, db);
  }
}

export { VehiclesRepository };
