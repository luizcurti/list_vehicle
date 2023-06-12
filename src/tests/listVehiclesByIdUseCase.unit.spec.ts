import "reflect-metadata";
import { container } from 'tsyringe';
import { IVehiclesRepository } from '@modules/vehicles/repositories/IVehiclesRepository';
import { AppError } from '@errors/appError';
import { ListVehiclesByIdUseCase } from '@modules/vehicles/useCases/listById/listVehiclesByIdUseCase';

describe('ListVehiclesByIdUseCase', () => {
  let vehiclesRepository: IVehiclesRepository
  let listVehiclesByIdUseCase: ListVehiclesByIdUseCase;

  beforeEach(() => {
    vehiclesRepository = {
      findByData: jest.fn(),
    } as unknown as jest.Mocked<IVehiclesRepository>;

    container.registerInstance<IVehiclesRepository>('VehiclesRepository', vehiclesRepository);

    listVehiclesByIdUseCase = container.resolve(ListVehiclesByIdUseCase);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return the expected data when valid id and timestamp are provided', async () => {
    const validId = 3;
    const validTimestamp = '2022-09-12 12:41:41.000 +0100';

    const data = [
      {
        id: 3,
        make: 'VW',
        model: 'GOLF',
        state: 'selling',
        timestamp: '2022-09-11T23:21:38.000Z',
      },
    ];

    jest.spyOn(vehiclesRepository, 'findByData').mockImplementationOnce(() => Promise.resolve(data));
    
    const result = await listVehiclesByIdUseCase.execute({
      id: validId,
      timestamp: validTimestamp,
    });

    expect(result).toEqual(data);
  });

  it('should throw an AppError with status 404 when the data does not exist', async () => {
    const invalidId = 4;
    const invalidTimestamp = '';

    jest.spyOn(vehiclesRepository, 'findByData').mockImplementation(() => Promise.resolve(null));

    await expect(listVehiclesByIdUseCase.execute({id: invalidId,
      timestamp: invalidTimestamp }))
    .rejects.toEqual(new AppError('Data does not exist', 404, 'Not Found'));
  });
});
