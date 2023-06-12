import { IGenericRepository } from '@shared/generic/repositories/IGenericRepository'

import { Vehicles } from '../infra/typeorm/entities/Vehicles';

type IVehiclesRepository = IGenericRepository<Vehicles>;

export { IVehiclesRepository };
