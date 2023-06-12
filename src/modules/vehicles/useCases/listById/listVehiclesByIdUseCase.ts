import { inject, injectable } from 'tsyringe';
import { AppError } from '@errors/appError';
import { IVehiclesRepository } from '@modules/vehicles/repositories/IVehiclesRepository';
import { IRequest } from './IlistVehiclesDTO';

@injectable()
class ListVehiclesByIdUseCase {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository
  ) {}

  async execute({ id, timestamp }: IRequest): Promise<any> {
    const data = await this.vehiclesRepository.findByData(id, timestamp);

    if(!data) 
      throw new AppError('Data does not exist', 404, 'Not Found');

    return data.map((item) => {
      return {
        id: item.id,
        make: item.make,
        model: item.model,
        state: item.state,
        timestamp: item.timestamp,
      };
    });;
  }
}

export { ListVehiclesByIdUseCase };
