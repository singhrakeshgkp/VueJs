# VueJs
- Basic
  - [Creating first project](#creating-first-project)
  - [Ref vs Reactive](#ref-vs-reactive)

## Creating first project
- run command ```npm create vite@latest vue-proj1``` and then select Vue frameworks and finally select java script.
- to run project go to project root directory and run following commands
  ```
  npm install patch-package --save-dev   //Remove the postinstall script run if npm install fails
  npm install
  
  ```
  - Extensions to use
     - Bracket view colorization togler
     - Live server
## Ref vs Reactive
- ref we use with primitive type however reactive we use with object. ref we can use with both primitive and object but reactive can not be used with primitive
  ```
  access ref object
  employees=ref({name:'rakesh'})  employees[0].value.name    this way we can access ref object
  ```
