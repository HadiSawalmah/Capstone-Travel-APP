const request = require('supertest');
const app = require('../../../server/index');

// Testing the Express server to ensure it serves index.html correctly
describe('Express Server Tests', () => {  
  test('should return the index.html file on GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.type).toBe('text/html');
  });
});

