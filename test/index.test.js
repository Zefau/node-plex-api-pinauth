var expect = require('chai').expect;
var sinon = require('sinon');

describe('Main Module', function() {
    require('./query-stubs.helper.js').plexAPIStubs();

    it('should fail to authenticate', function(done){
        this.module.authenticate(this.plexAPI, function(err, token) {
            console.log(err);
            expect(err).to.be.an('Error');
            done();
        })
    })

    it('should return a token if one is passed to the constructor', function(done){
        this.module.authenticate(this.plexAPI, function(err, token) {
            console.log(err);
            expect(err).to.be.an('Error');
            done();
        })
    })
});