import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();

describe('Status and content', function() {
	describe ('Main page', function() {
		it("status", (done) => {
			chai.request(app)
				.get('/')
				.end((err, res) => {
						res.should.have.status(200);
						res.body.should.be.a('object');
						done();
				});
		});
	});

	describe ('About page', function() {
		it("status", (done) => {
			chai.request(app)
				.get('/about}')
				.end((err, res) => {
						res.should.have.status(404);
						done();
				});
			});
		});
});
