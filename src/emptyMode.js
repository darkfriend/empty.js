'use strict';

const emptyMode = {
    base: 0, // base mode
    function: 1, // check result function
    zero: 2, // zero is not empty
    string: 4, // empty string is not empty
    object: 8, // empty object is not empty
};

module.exports = emptyMode;

module.exports.default = emptyMode;