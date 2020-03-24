# Console Color Style
Package for the purpose of providing colored outputs on the console
## Quick Start

### Install
```bash
# using npm
$ npm install console-color-style
```
```bash
# using yarn
$ yarn add console-color-style
```
### Exemple
You must import the package and use the **printf** method 
```js
const { printf } = require('console-color-style');
// 1) the function receives two parameters
// 2) the first is the color and the second the information to be displayed
printf('green', 'Hello World');
``` 
### Supported Colors
- **blue**;
- **red**;
- **black**;
- **green**; 
- **yellow**; 
- **magneta**; 
- **cyan** ;
- **white**; 
- **default**.
