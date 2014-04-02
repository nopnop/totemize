
module.exports = totemize;

/**
 * Generate totem name with an adjective and a noun
 *
 * @param  {Object} opt
 *         Optional configuration
 *         - adjectives: An array of adjectives
 *         - nouns: An array of nouns
 *         - separator: Adjective/noun separator (default ' ')
 *
 * @return {String}
 */
function totemize(opt) {
  opt            = opt || {}
  opt.adjectives = totemize.rand(opt.adjectives || require('../data/adjectives.json'))
  opt.nouns      = totemize.rand(opt.nouns      || require('../data/nouns.json'))
  opt.separator  = opt.separator || ' '
  opt.trans      = opt.trans || totemize.cap
  return opt.trans(opt.adjectives) + opt.separator + opt.trans(opt.nouns)
}

totemize.version = require('../package.json').version;

totemize.rand = function(list) {
  return list[Math.floor(Math.random() * list.length)]
}

totemize.cap = function(word) {
  return word.slice(0,1).toUpperCase() + word.slice(1).toLowerCase();
}
