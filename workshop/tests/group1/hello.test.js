const request = require("supertest");
const app = require("../../server");

test('Test Status 200 Success', async () => {
  const response = await request(app)
      .get('/api')
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Welcome to TDD World');
});

test('Test Status 404 fail', async () => {
  const response = await request(app)
      .get('/api')
    expect(response.status).toEqual(404);
});

