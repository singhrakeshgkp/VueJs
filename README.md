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

## Directive (binding)
#### file name 01-directive-ex1.html
- **v-html**--> transform in html. 
- **v-once**--> display variable content only once, even if variable value gets change dynamically that change will not refelect on the DOM where its applied.
- **v-bind**/ : --> bind variale (variable having url as content) to the element. v-bind shorthand is :(colon), we can bind inline css, css class....etc
- **v-show**--> to show or hide

## Conditional rendering
#### file name 02-conditional-rendering-ex1.html
- **if else**  --> task is to display given num is even or odd
- **if else if** ---> display if number is 0, positive, negative or not a number
- **display multiple elements if a condition met true**-->we can achieve this in two way
  - wrapping those element in another div tag
  - using template, this one is recomended as it will not introduce additional unnecessary div tag.
- **v-show** ---> used to show or hide elements (internally it uses display: nons css prop). the diff between v-if and v-show is v-if element will not be present  in DOM if condition does not meet, however element with v-show will be present in DOM with display:none prop.

## List Rendering
- List Rendering without key
- List Rendering with key
- List Rendering with index
- Rendering List of Objects
- Iterate through object props for example i have opject empInfo with props name, age. display name and age using v-for
### File name 03-list-rendering-ex1.html
- List Rendering without key
- List Rendering with key prop
- List Rendering with index
- Rendering List of Objects
- Iterate through Object Props
- Conditional List Rendering using template

## Methods
#### Using Options API (Vue 2 & Vue 3)
- Methods go inside methods: {}
- Access data using this
- Call methods in template without ()
#### Using Composition API (setup) – Recommended in Vue 3
### Async methods (both APIs)
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
