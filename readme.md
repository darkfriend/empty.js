Check empty (javascript)
=====

## How Install

```bash 
npm i empty-lite -S
```

## How to use?

```javascript
let variable;
empty(variable); // true

// check empty Object
variable = {};
empty(variable); // true
empty(variable.param); // true (no throw exception)
empty(variable['param']); // true (no throw exception)
empty(variable.param.subParam); // throw exception!

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

// check Date
variable = new Date();
empty(variable); // false

// check empty function
variable = function(){};
empty(variable); // true
```

## Testing

```bash 
cd ./node_modules/empty-lite && npm i && npm test 
```