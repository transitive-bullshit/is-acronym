'use strict'

const knownAcronyms = require('./known-acronyms')

/**
 * Determines whether a given string is a common English acronym.
 *
 * @name isAcronym
 * @function
 *
 * @param {string} text - String to test.
 * @return {boolean}
 */
module.exports = (text) => {
  const upper = text.toUpperCase()
  const lower = text.toLowerCase()

  return text === upper && knownAcronyms.has(lower)
}
