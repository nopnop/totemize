# totemize [![Build Status](https://secure.travis-ci.org/nopnop/totemize.png?branch=master)](http://travis-ci.org/nopnop/totemize) [![NPM version](https://badge-me.herokuapp.com/api/npm/totemize.png)](http://badges.enytc.com/for/npm/totemize)

> An random generator of an adjective and a noun for release name or mnemonic process name


## Installation

Global npm install to use command line tool:

```shell
$ npm install -g totemize
```

Or to use totemize api in you project:

```shell
$ npm install --save totemize
```

## Command line

**Example:**

```shell
# Simple usage
$ totemize
Didactic Bear

## See options below
$ totemize -s '-'
Didactic-Bear

# Example with git to create a random tag name
$ git tag 0.4.2 -m "$(totemize)"
```


**Usage:**

```shell
$ totemize -h

  Usage: totemize [options]

  Options:

    -h, --help                output usage information
    -V, --version             output the version number
    -a, --adjectives <file>   An file that export an array of adjectives
    -n, --nouns <file>        An file that export an array of nouns
    -s, --separator <string>  A string to dissociate adjective and noon (default: space)
```

## API

**Example:**

```javascript
var totemize = require('totemize')

console.log(totemize());
// Output: "Propitious Panda"
```

**Customize:**

```javascript
var totemize = require('totemize')


var custom  = totemize({
  adjectives: ['foo'],
  nouns:      ['bar'],
  separator:  '-'
})
// custom => "Foo-Bar"
```



## License

The MIT License
