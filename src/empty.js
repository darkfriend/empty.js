'use strict';

/**
 * Check variable on empty
 * @author darkfriend <hi@darkfriend.ru>
 * @param {*} variable
 * @param {int} strict bit for any strict mode (0 - no strict, 1 - then check result function)
 * @return {boolean}
 */
function empty(variable, strict= 0) {
    return ( variable === undefined || variable === "" || variable === 0 || variable === "0" || variable === null || variable === false || (typeof variable === 'object' && (Object.values(variable).length === 0 && (typeof variable.constructor() !== 'string') )) || (typeof variable === 'function' && (strict ? empty(variable()) : false) ) );
}

module.exports = empty;

// Allow use of default import syntax in TypeScript
module.exports.default = empty;