# VueJs
- Basic
  - [Creating first project](#creating-first-project)
  - [Ref vs Reactive](#ref-vs-reactive)
  - [Directive](#directive)
  - [Style](#style)
  - [Event](#event)
  - [Data binding](#data-binding)

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

## Directive
- **v-html**--> transform in html.
- **v-once**--> display variable content only once, even if variable value gets change dynamically that change will not refelect on the DOM where its applied.
- **v-bind**/ : --> bind variale (variable having url as content) to the element. v-bind shorthand is :(colon)
- **v-show**--> to show or hide
- **v-if**-->

## Style
## Event
- click
- event modifier

## Data binding
- two way binding
- model modifier
   - v-model -->used for binding
   - v-model.trim---> if used with input, it will remove all spaces from text box.
   - v-model.lazy---> will apply binding changes once focus is out. for ex if we are typing in text box and deplaying that value in <p> tag, changes in p tag will happens once focus is out from input box
   - v-model.number---> make sure we are typing number
