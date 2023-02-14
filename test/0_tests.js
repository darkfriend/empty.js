const chai = require('chai');
const assert = chai.assert;
const empty = require('../index');
const emptyMode = require('../src/emptyMode');

let variable;
it('empty(undefined); // true', () => {
    variable = undefined;
    assert.equal(empty(variable), true);
});

it('empty({}); // true', () => {
    variable = {};
    assert.equal(empty(variable), true);
});

it('empty({}.param); // true', () => {
    variable = {};
    assert.equal(empty(variable.param), true);
});

it('empty({}[\'param\']); // true', () => {
    variable = {};
    assert.equal(empty(variable['param']), true);
});

it('empty({}.param.subParam); // throw exception!', (done) => {
    variable = {};
    try{
        assert.expect(empty(variable.param.subParam));
    } catch (e) {
        done();
    }
    assert.expect.fail();
});

it('empty({}.param?.subParam); // true', () => {
    variable = {};
    assert.equal(empty(variable.param?.subParam), true);
});

it('empty({a:0}.a); // true', () => {
    variable = {a:0};
    assert.equal(empty(variable.a), true);
});
it('empty({a:1}.a); // false', () => {
    variable = {a:1};
    assert.equal(empty(variable.a), false);
});

it('empty([]); // true', () => {
    variable = [];
    assert.equal(empty(variable), true);
});
it('empty([1]); // true', () => {
    variable = [];
    assert.equal(empty(variable[1]), true);
});


it('empty([0]); // false', () => {
    variable = [0];
    assert.equal(empty(variable), false);
});
it('empty([0][0]); // true', () => {
    variable = [0];
    assert.equal(empty(variable[0]), true);
});
it('empty([1][0]); // false', () => {
    variable = [1];
    assert.equal(empty(variable[0]), false);
});


it('empty(""); // true', () => {
    variable = '';
    assert.equal(empty(variable), true);
});
it('empty(" "); // true', () => {
    variable = ' ';
    assert.equal(empty(variable), true);
});
it('empty("sdfsdf"); // false', () => {
    variable = 'sdfsdf';
    assert.equal(empty(variable), false);
});


it('empty("0"); // true', () => {
    variable = '0';
    assert.equal(empty(variable), true);
});
it('empty("1"); // false', () => {
    variable = '1';
    assert.equal(empty(variable), false);
});

it('empty("0.00"); // true', () => {
    variable = '0.00';
    assert.equal(empty(variable), true);
});
it('empty("0.01"); // false', () => {
    variable = '0.01';
    assert.equal(empty(variable), false);
});

it('empty(0); // true', () => {
    variable = 0;
    assert.equal(empty(variable), true);
});
it('empty(1); // false', () => {
    variable = 1;
    assert.equal(empty(variable), false);
});

it('empty(0.00); // true', () => {
    variable = 0.00;
    assert.equal(empty(variable), true);
});
it('empty(0.01); // false', () => {
    variable = 0.01;
    assert.equal(empty(variable), false);
});


// it('empty(new Date()); // false', () => {
//     variable = new Date();
//     assert.equal(empty(variable), false);
// });


it('empty(function(){}); // false', () => {
    variable = function(){};
    assert.equal(empty(variable), false);
});

it('empty(function(){}, 1); // true, when with mode 1', () => {
    variable = function(){};
    assert.equal(empty(variable, 1), true);
});

it('empty(function(){ return \'\'; }); // false', () => {
    variable = function(){
        return '';
    };
    assert.equal(empty(variable), false);
});

it('empty(function(){ return \'\'; }, 1); // true, when with mode 1', () => {
    variable = function(){
        return '';
    };
    assert.equal(empty(variable, 1), true);
});

it('empty(function(){ return 0; }); // false', () => {
    variable = function(){
        return 0;
    };
    assert.equal(empty(variable), false);
});

it('empty(function(){ return 0; }, 1); // true, when with mode 1', () => {
    variable = function(){
        return 0;
    };
    assert.equal(empty(variable, 1), true);
});

it('empty(function(){ return 0; }, 1|2); // false, when with mode 1 and 2', () => {
    variable = function(){
        return 0;
    };
    assert.equal(empty(variable, 1|2), false);
});

it('empty(function(){ return null; }); // false', () => {
    variable = function(){
        return null;
    };
    assert.equal(empty(variable), false);
});

it('empty(function(){ return null; }, 1); // true, when with mode 1', () => {
    variable = function(){
        return null;
    };
    assert.equal(empty(variable, 1), true);
});

it('empty(function(){ return; }); // false', () => {
    variable = function(){
        return;
    };
    assert.equal(empty(variable), false);
});

it('empty(function(){ return; }, 1); // true, when with mode 1', () => {
    variable = function(){
        return;
    };
    assert.equal(empty(variable, 1), true);
});

it('empty(new Date()); // false', () => {
    assert.equal(empty(new Date()), false);
});

it('empty(new Date(0)); // false', () => {
    assert.equal(empty(new Date()), false);
});

it('empty(new Date(0), 16); // true, when with mode 16', () => {
    assert.equal(empty(new Date(0), 16), true);
});
