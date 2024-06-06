const request = require('supertest');
const express = require('express');
const app = require('./index.js')

describe('GET /', () => {
  it('responds with Hello World!', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello World!', done);
  });
});
