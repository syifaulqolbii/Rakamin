const app = require('../app');
const request = require('supertest');

test('Get All Todo List', (done) => {
    request(app)
        .get('/api/v1/todos')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.body.message).toBe('Success');
            expect(res.body.data).toBeInstanceOf(Array);
            done();
        })
        .catch((err) => {
            done(err);
        });
});

test('Get One Todo List', (done) => {
    request(app)
        .get('/api/v1/todos/1')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.body.message).toBe('Success');
            expect(res.body.data).toBeInstanceOf(Object);
            done();
        })
        .catch((err) => {
            done(err);
        });
});

test('Create Todo List', (done) => {
    request(app)
        .post('/api/v1/todos')
        .send({
            title: 'Belajar Testing',
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.body.message).toBe('Success');
            expect(res.body.data).toBeInstanceOf(Object);
            done();
        })
        .catch((err) => {
            done(err);
        });
});

test('Update Todo List', (done) => {
    request(app)
        .put('/api/v1/todos/1')
        .send({
            title: 'Belajar Testing Update',
        })
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.body.message).toBe('Success');
            expect(res.body.data).toBeInstanceOf(Object);
            done();
        })
        .catch((err) => {
            done(err);
        });
});

test('Delete Todo List', (done) => {
    request(app)
        .delete('/api/v1/todos/2')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((res) => {
            expect(res.body.message).toBe('Success');
            done();
        })
        .catch((err) => {
            done(err);
        });
});