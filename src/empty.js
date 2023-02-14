'use strict';

const {isNumber} = require('isnmbr');

/**
 * Check variable on empty
 * @author darkfriend <hi@darkfriend.ru>
 * @param {*} variable
 * @param {int} mode Bitwise for any mode (0 - no strict, 1 - then check result function, 2 - then 0 not empty, 4 - then "" not empty, 8 - then "{}" not empty, 16 - then Date(0) is empty )
 * @return {boolean}
 */
function empty(variable, mode= 0) {
    if(mode) {
        return ( variable === undefined || (!(mode&4) && (variable === "" || variable === " ")) || (!(mode&2) && (variable === 0 || (isNumber(variable) && parseFloat(variable)===0))) || variable === null || variable === false || (typeof variable === 'object' && ((!(mode&8) && Object.values(variable).length === 0 && (typeof variable.constructor() !== 'string')) || ((mode&16) && (variable instanceof Date) ? empty(variable.getTime()) : false) )) || (typeof variable === 'function' && ((mode&1) ? empty(variable(), mode) : false) ) );
    }
    return ( variable === undefined || variable === "" || variable === " " || variable === 0 || (isNumber(variable) && parseFloat(variable)===0) || variable === null || variable === false || (typeof variable === 'object' && (Object.values(variable).length === 0 && (typeof variable.constructor() !== 'string') )) || (typeof variable === 'function' && (mode&1 ? empty(variable(), mode) : false) ) );
}

module.exports = empty;

// Allow use of default import syntax in TypeScript
module.exports.default = empty;