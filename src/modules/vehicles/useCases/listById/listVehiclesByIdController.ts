import { container } from 'tsyringe';
import { ListVehiclesByIdUseCase } from './listVehiclesByIdUseCase';
import { Request, Response } from 'express';

class ListVehiclesByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { timestamp } = request.body;

    const listVehiclesByIdUseCase = container.resolve(ListVehiclesByIdUseCase);

    const listData = await listVehiclesByIdUseCase.execute({
      id: Number(id),
      timestamp,
    });
    return response.status(200).json(listData);
  }
}

export { ListVehiclesByIdController };
