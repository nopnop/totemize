var totemize = require('../lib/totemize.js')
var should   = require('should')
var sh       = require('execSync')
var join     = require('path').join


describe('totemize()', function() {
  it('should return a string with two words', function() {
    totemize().should.be.instanceof(String);
    totemize().split(' ').length.should.eql(2);
  })

  describe('options', function() {

    it('- separator should change separator string', function() {
      totemize({separator:'-'}).split('-').length.should.eql(2);
    })

    it('- adjectives should override default adjectives list', function() {
      totemize({adjectives:['foo']})
        .split(' ')[0].toLowerCase().should.eql('foo');
    })

    it('- nouns should override default nouns list', function() {
      totemize({nouns:['foo']})
        .split(' ')[1].toLowerCase().should.eql('foo');
    })

  })
})

describe('totemize command line', function() {
  var cwd = join(__dirname, '../');

  function cmd(options) {
    var result = sh.exec('cd "'+cwd+'" && ./bin/totemize.js ' + options);
    if(result.code) {
      throw new Error(result.stdout.trim());
    }
    return result.stdout.trim();
  }

  it('should return a string with two words', function() {
    var result = cmd('');
    result.should.be.instanceof(String);
    result.split(' ').length.should.eql(2);
  })

  describe('options', function() {

    it('-s, --separator should change separator string', function() {
      cmd('--separator "-"')
        .split('-').length.should.eql(2);
    })

    it('-a, --adjectives should override default adjectives list with a file to require()', function() {
      cmd('--adjectives ./test/fixtures/list.json')
        .split(' ')[0].toLowerCase().should.eql('foo');
    })

    it('-n, --nouns should override default nouns list with a file to require()', function() {
      cmd('--nouns ./test/fixtures/list.json')
        .split(' ')[1].toLowerCase().should.eql('foo');
    })

  })
});
