const chai = require('chai');
const assert = chai.assert;
const empty = require('../index');
const emptyMode = require('../src/emptyMode');

let variables = [
    {
        title: 'empty(1, 1|2);',
        variable: 1,
        mode: emptyMode.function|emptyMode.zero,
        result: false,
    },
    {
        title: 'empty(0, 1|2);',
        variable: 0,
        mode: emptyMode.function|emptyMode.zero,
        result: false,
    },
    {
        title: 'empty(0, 2|4);',
        variable: 0,
        mode: emptyMode.zero|emptyMode.string,
        result: false,
    },
    {
        title: 'empty(0.00, 2|4);',
        variable: 0.00,
        mode: emptyMode.zero|emptyMode.string,
        result: false,
    },
    {
        title: 'empty("0.00", 2|4);',
        variable: "0.00",
        mode: emptyMode.zero|emptyMode.string,
        result: false,
    },
    {
        title: 'empty(0.00, 2);',
        variable: "0",
        mode: emptyMode.zero|emptyMode.string,
        result: false,
    },
    {
        title: 'empty(" ", 2|4);',
        variable: " ",
        mode: emptyMode.zero|emptyMode.string,
        result: false,
    },
    {
        title: 'empty(" ", 2);',
        variable: " ",
        mode: emptyMode.zero,
        result: true,
    },
    {
        title: 'empty("", 2|4);',
        variable: " ",
        mode: emptyMode.zero|emptyMode.string,
        result: false,
    },
    {
        title: 'empty("", 2);',
        variable: "",
        mode: emptyMode.zero,
        result: true,
    },
    {
        title: 'empty("dssad", 2|4);',
        variable: "dssad",
        mode: emptyMode.zero|emptyMode.string,
        result: false,
    },

    {
        title: 'empty({}, 2|4|8);',
        variable: {},
        mode: emptyMode.zero|emptyMode.string|emptyMode.object,
        result: false,
    },
    {
        title: 'empty({}, 2|4);',
        variable: {},
        mode: emptyMode.zero|emptyMode.string,
        result: true,
    },
    {
        title: 'empty(new Date(0), 16);',
        variable: new Date(0),
        mode: emptyMode.date,
        result: true,
    },
];

for (let variable of variables) {
    it(
        `${variable.title} // ${variable.result ? 'true' : 'false'}`,
        () => {
            assert.equal(empty(variable.variable, variable.mode), variable.result);
        }
    );
}