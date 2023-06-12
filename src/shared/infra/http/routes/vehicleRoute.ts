import { Router } from 'express';

import { ListVehiclesByIdController } from '@modules/vehicles/useCases/listById/listVehiclesByIdController';

const vehiclesRoutes = Router();
const vehiclesPrefix = `/vehicles`;

const listVehiclesByIdController = new ListVehiclesByIdController();

vehiclesRoutes.get('/:id', listVehiclesByIdController.handle);

export { vehiclesRoutes, vehiclesPrefix };
