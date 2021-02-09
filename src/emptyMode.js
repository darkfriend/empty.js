'use strict';

/**
 * Check variable on empty
 * @author darkfriend <hi@darkfriend.ru>
 * @param {*} variable
 * @param {int} mode Bitwise for any mode (0 - no strict, 1 - then check result function, 2 - then 0 not empty, 4 - then "" not empty, 8 - then "{}" not empty )
 * @return {boolean}
 */

const emptyMode = {
    base: 0, // base mode
    function: 1, // check result function
    zero: 2, // zero is not empty
    string: 4, // empty string is not empty
    object: 8, // empty object is not empty
};

module.exports = emptyMode;

// Allow use of default import syntax in TypeScript
module.exports.default = emptyMode;