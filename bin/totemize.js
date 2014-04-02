#!/usr/bin/env node

var cmd      = require('commander')
var totemize = require('../lib/totemize')
var resolve  = function(r) {return require('path').resolve(r)}


cmd
  .version(totemize.version)
  .option('-a, --adjectives <file>',
    'An file that export an array of adjectives', resolve)
  .option('-n, --nouns <file>',
    'An file that export an array of nouns', resolve)
  .option('-s, --separator <string>',
    'A string to dissociate adjective and noon (default: space)', ' ')
  .parse(process.argv)


console.log(totemize({
  adjectives: require(cmd.adjectives || '../data/adjectives.json'),
  nouns:      require(cmd.nouns || '../data/nouns.json'),
  separator:  cmd.separator
}));
