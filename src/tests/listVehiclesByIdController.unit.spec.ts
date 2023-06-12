import "reflect-metadata";
import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { ListVehiclesByIdController } from "@modules/vehicles/useCases/listById/listVehiclesByIdController";
import { ListVehiclesByIdUseCase } from "@modules/vehicles/useCases/listById/listVehiclesByIdUseCase";

jest.mock('tsyringe');
jest.mock('@modules/vehicles/useCases/listById/listVehiclesByIdUseCase', () => {
  return {
    ListVehiclesByIdUseCase: jest.fn().mockImplementation(() => {
      return {
        execute: jest.fn()
      }
    })
  }
});

describe('ListVehiclesByIdController', () => {
    let listVehiclesByIdController: ListVehiclesByIdController;
    let listVehiclesByIdUseCase: ListVehiclesByIdUseCase;
    let request: Request;
    let response = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    } as unknown as Response;

    beforeEach(() => {
        listVehiclesByIdController = new ListVehiclesByIdController();

        listVehiclesByIdUseCase = {
            execute: jest.fn(),
        } as unknown as jest.Mocked<ListVehiclesByIdUseCase>;
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    const data = [
        {
        id: 3,
        make: 'VW',
        model: 'GOLF',
        state: 'selling',
        timestamp: '2022-09-11T23:21:38.000Z',
        },
    ]

  it('should return the expected data when valid id and timestamp are provided', async () => {
    const validId = '3';
    const validTimestamp = '2022-09-12 12:41:41.000 +0100';

    const request = { params: { validId }, body: { validTimestamp } }; 

    jest.spyOn(container, 'resolve').mockReturnValue(listVehiclesByIdUseCase);
    jest.spyOn(listVehiclesByIdUseCase, 'execute').mockReturnValue(Promise.resolve(data));

    await listVehiclesByIdController.handle(request as unknown as Request, response as Response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith(data);
  });
});
