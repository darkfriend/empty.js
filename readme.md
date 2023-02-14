Check empty (javascript)
=====

## What checks for empty
* undefined
* null
* string
* number
* array
* object
* function
* date

## How Install

``` 
npm i empty-lite -S
```

### import
```javascript
import empty from 'empty-lite';
```
or
```javascript
const empty = require('empty-lite');
```

## How to use?

```
empty(variable, mode);
```

### parameters

* `variable` - mixed data for check
* `mode` - mode bitwise for check
    * `0` - base mode (**default**)
    * `1` - check result function
    * `2` - zero is not empty
    * `4` - empty string is not empty
    * `8` - empty object is not empty
  
## Results

### undefined and null

```javascript
empty(undefined); // true
empty(null); // true
```

### number

```javascript
empty("0"); // true
empty("1"); // false
empty("0.00"); // true
empty("0.01"); // false
empty(0); // true
empty(1); // false
empty(0.00); // true
empty(0.01); // false

// with mode (2 - then 0 not empty)
empty(1, 1|2); // false
empty(0, 1|2); // false
empty(0, 2|4); // false
empty(0.00, 2|4); // false
empty("0.00", 2|4); // false
empty(0.00, 2); // false
```

### string

```javascript
empty(""); // true
empty(" "); // true
empty("sdfsdf"); // false

// with mode (4 - then "" not empty)
empty(" ", 2|4); // false
empty(" ", 2); // true
empty("", 2|4); // false
empty("", 2); // true
empty("dssad", 2|4); // false
```

### array

```javascript
empty({a:0}.a); // true
empty({a:1}.a); // false
empty([]); // true
empty([1]); // true
empty([0]); // false
empty([0][0]); // true
empty([1][0]); // false
```

### object

```javascript
empty({}); // true
empty({}.param); // true
empty({}['param']); // true
empty({}.param.subParam); // throw exception!
empty({}.param?.subParam); // no exception

// with mode (8 - then {} not empty)
empty({}, 2|4|8); // false
empty({}, 2|4); // true
```

### function

```javascript
empty(function(){}); // false
empty(function(){ return ''; }); // false
empty(function(){ return 0; }); // false
empty(function(){ return null; }); // false
empty(function(){ return; }); // false

// with mode 1 then check empty result function
empty(function(){}, 1); // true
empty(function(){ return ''; }, 1); // true
empty(function(){ return 0; }, 1); // true
empty(function(){ return null; }, 1); // true
empty(function(){ return; }, 1); // true

// with mode 1 then check empty result function and zero avaiable
empty(function(){}, 1|2); // true
empty(function(){ return ''; }, 1|2); // true
empty(function(){ return 0; }, 1|2); // false
empty(function(){ return null; }, 1|2); // true
empty(function(){ return; }, 1|2); // true
```

### date

```javascript
empty(new Date()); // false
empty(new Date(0)); // false
empty(new Date(0), 16); // true, when mode 16
```

## What are modes
```javascript
import emptyMode from 'empty-lite/src/emptyMode';

emptyMode.base === 0 // base mode
emptyMode.function === 1 // check result function
emptyMode.zero === 2 // zero is not empty
emptyMode.string === 4 // empty string is not empty
emptyMode.object === 8 // empty object is not empty
```

## Examples

```javascript
import empty from 'empty-lite';

let variable;
empty(variable); // true

// check empty Object
variable = {};
empty(variable); // true
empty(variable.param); // true (no throw exception)
empty(variable['param']); // true (no throw exception)
empty(variable.param.subParam); // throw exception! - bad
empty(variable.param?.subParam); // true

variable = {a:0};
empty(variable.a); // true

// check empty Array
variable = [];
empty(variable); // true
empty(variable[1]); // true

variable = [0];
empty(variable); // false
empty(variable[0]); // true

// check empty String
variable = '';
empty(variable); // true

variable = '0';
empty(variable); // true

// check empty Number
variable = 0;
empty(variable); // true

variable = '0.00';
empty(variable); // true

// check empty Number
variable = 0.00;
empty(variable); // true

// check Date
variable = new Date();
empty(variable); // false
empty(new Date(0)); // false
empty(new Date(0), 16); // true

// check empty function
variable = function(){};
empty(variable); // false

// check empty function with strict
variable = function(){};
empty(variable, 1); // true

// check result empty function with strict
variable = function(){
    return 0;
};
empty(variable); // false

// check result empty function without strict
variable = function(){
    return 0;
};
empty(variable, 1); // true

// check result empty function with strict
variable = function(){
    return '';
};
empty(variable); // false



// check result empty function without strict
variable = function(){
    return '';
};
empty(variable, 1); // true
```

## Testing

```bash 
cd ./node_modules/empty-lite && npm i && npm test 
```

## License

  MIT