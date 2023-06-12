import request from 'supertest';
import { App } from '@shared/infra/app';

describe('Test the root path', () => {
    it('Should respond to the GET method', async () => {
        const app = new App();
        await app.init();

        const expressApp = app.getExpressApp(); // Obtém a instância do aplicativo Express

        const response = await request(expressApp)
            .get('/api/vehicles/3')
            .send({
                "timestamp": "2022-09-12 12:41:41.000 +0100"
        });    

        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(    [
            {
              id: 3,
              make: 'VW',
              model: 'GOLF',
              state: 'sold',
              timestamp: '2022-09-12 12:41:41+00'
            }
        ]);
    });
});
