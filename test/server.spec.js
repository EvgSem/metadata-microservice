var server = require('../server.js');
var supertest = require('supertest');
var expect = require('chai').expect;

describe('metadata-microservice', function () {
    it('should return size of input file', function (done) {
        supertest(server)
    .post('/file-size')
    .attach('fileInput', './test/test.txt')
    .expect(200)
    .end(function (err, res) {
        expect(res.text).to.equal('4');
        done();
    });
    });
});
