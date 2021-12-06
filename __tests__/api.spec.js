const request = require('supertest');
const app = require('../src/app');
const {DB: {getConnection, closeConnection}} = require('../src/utils');

const {Movie} = require('../src/models');
const mongoose = require('mongoose');

describe('Movie', () => {
  describe('POST /api/movies', () => {
    beforeAll(() => {
      return getConnection();
    });

    beforeEach(async () => {
      await mongoose.connection.db.dropDatabase();
    });

    afterAll(() => {
      return closeConnection();
    });

    it('creates movie if valid body', (done) => {
      request(app)
        .post('/api/movies')
        .send({
          title: 'Fight Club',
          overview: 'Supa dupa good movie',
          release_date: '01-01-2000',
          genre: 'drama',
          vote_average: 10,
          budget: 2,
          original_language: 'en'
        }).then(async res => {
        const movieList = await Movie.find();
        expect(movieList).toHaveLength(1);
        expect(res.statusCode).toBe(200);
        done();
      });
    });

    it('rejects if invalid body', (done) => {
      request(app)
        .post('/api/movies')
        .send({
          title: 5
        })
        .then(async res => {
          const movieList = await Movie.find();
          expect(res.statusCode).toBe(400);
          expect(movieList).toHaveLength(0);
          done();
        });
    });
  });
});