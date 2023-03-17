import request from 'supertest';
import app from './app';

describe('GET /', () => {
  test('should respond with "Hello from backend to frontend"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello from backend to frontend');
  });

  test('should respond with error message', async () => {
    const response = await request(app).get('/unKnownPath');
    expect(response.status).toBe(404);
  });
});

describe('POST /weather', () => {
  test('should respond with a success message if the city is found', async () => {
    const response = await request(app)
      .post('/weather')
      .send({ cityName: 'London' });
    expect(response.status).toBe(200);
    expect(response.body.weatherText).toContain('The temperature in London is');
  });

  test('should respond with an error message if the city is not found', async () => {
    const response = await request(app)
      .post('/weather')
      .send({ cityName: 'NonExistentCity' });
    expect(response.status).toBe(404);
    expect(response.body.weatherText).toBe('City is not found');
  });
});