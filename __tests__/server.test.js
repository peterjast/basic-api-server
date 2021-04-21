'use strict';

const { server } = require('../src/server.js'); // bring in server
const supertest = require('supertest'); // pull in npm package
const mockRequest = supertest(server); // mock the server for us

describe('API SERVER:', () => {

  it('should respond with a 404 on bad route', async() => {
    return mockRequest.get('/bad-route').then(data => {
      expect(data.status).toBe(404);
    })
  });

  it('should respond with a 404 on bad method', async() => {
    return mockRequest.post('/clothes/1').then(data => {
      expect(data.status).toBe(404);
    })
  });

  it('should create new clothes in the db', async() => {
    const response = await mockRequest.post('/clothes').send({ description: 'test_clothing' });
      expect(response.status).toBe(201);
      expect(response.body.record.description).toEqual('test_clothing');
  });

  it('should retrieve a clothing item from the db', async() => {
    const response = await mockRequest.get('/clothes/1');
    expect(response.status).toBe(200);
    expect(response.body.record.description).toEqual('test_clothing');
  });

  it('should retrieve all clothes from the db', async() => {
    const response = await mockRequest.get('/clothes');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([ { id: 1, record: { description: 'test_clothing' } } ]);
    console.log(response.body);
  });

  it('should update a clothing item from the db', async() => {
    const response = await mockRequest.put('/clothes/1').send({ description: 'test_clothing_update' });
    expect(response.status).toBe(200);
    expect(response.body.record.description).toEqual('test_clothing_update');
  });

  it('should delete a clothing item from the db', async() => {
    const response = await mockRequest.delete('/clothes/1');
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  });

  it('should create new food in the db', async() => {
    const response = await mockRequest.post('/food').send({ description: 'test_food' });
      expect(response.status).toBe(201);
      expect(response.body.record.description).toEqual('test_food');
  });

  it('should retrieve a food item from the db', async() => {
    const response = await mockRequest.get('/food/1');
    expect(response.status).toBe(200);
    expect(response.body.record.description).toEqual('test_food');
  });

  it('should retrieve all food from the db', async() => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
    expect(response.body).toEqual([ { id: 1, record: { description: 'test_food' } } ]);
    console.log(response.body);
  });

  it('should update a food from the db', async() => {
    const response = await mockRequest.put('/food/1').send({ description: 'test_food_update' });
    expect(response.status).toBe(200);
    expect(response.body.record.description).toEqual('test_food_update');
  });

  it('should delete a food from the db', async() => {
    const response = await mockRequest.delete('/food/1');
    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  });

})