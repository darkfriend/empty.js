Check empty (javascript)
=====

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

### parameters

* `variable` - mixed data for check
* `strict` - mode for chek
    * `0` - no strict mode (**default**)
    * `1` - strict mode for check result in function

### examples

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
empty(variable.param?.subParam); // true (no throw exception) - good (stage-3)

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