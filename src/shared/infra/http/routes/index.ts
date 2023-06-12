import { Router } from 'express';
import { handlingErrors } from '@shared/infra/http/middlewares/handlingErrors';

import { vehiclesPrefix, vehiclesRoutes } from './vehicleRoute';

const routes = Router();

routes.use(vehiclesPrefix, vehiclesRoutes);

routes.use(handlingErrors);

export { routes };
