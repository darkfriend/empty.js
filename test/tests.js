const chai = require('chai');
const assert = chai.assert;
const empty = require('../index');

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


it('empty(new Date()); // false', () => {
    variable = new Date();
    assert.equal(empty(variable), false);
});


it('empty(function(){}); // false', () => {
    variable = function(){};
    assert.equal(empty(variable), false);
});

it('strict empty(function(){}); // true', () => {
    variable = function(){};
    assert.equal(empty(variable, 1), true);
});

it('empty(function(){ return \'\'; }); // false', () => {
    variable = function(){
        return '';
    };
    assert.equal(empty(variable), false);
});

it('strict empty(function(){ return \'\'; }); // true', () => {
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

it('strict empty(function(){ return 0; }); // true', () => {
    variable = function(){
        return 0;
    };
    assert.equal(empty(variable, 1), true);
});