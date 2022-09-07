'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('Verify API server', () => {
  it('Check home page', async () => {
    const res = await request.get('/');
    expect(res.text).toEqual('Hello to number validator!');
  });

  it('Verify /square GET endPoint', async () => {
    const res = await request.get('/square?num=5');
    expect(res.text).toEqual('{"num":25}');
  });

  it( 'Square route fails with invalid number', async () => {
    const res = await request.get( '/square?num=test' );
    expect( res.status ).toBe( 500 );
    expect( res.text ).toBe( '{"code":500,"message":"Server Error:  testInvalid Number"}' );
} );
});
