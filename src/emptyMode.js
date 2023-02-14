'use strict';

const emptyMode = {
    default: 0, // default mode
    base: 0, // base mode
    function: 1, // check result function
    zero: 2, // zero is not empty
    string: 4, // empty string is not empty
    object: 8, // empty object is not empty
    date: 16, // check empty date
};

module.exports = emptyMode;

module.exports.default = emptyMode;