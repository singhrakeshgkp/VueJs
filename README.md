# VueJs
- Basic
  - [Extensions to install](#Extensions-to-install)
  - [Shortcuts](#Shortcuts) 
  - [Creating first project](#creating-first-project)
  - [Ref vs Reactive](#ref-vs-reactive)
  - [Directive](#directive)
  - [Conditional Rendering](#Conditional-Rendering)
  - [List Rendering](#List-Rendering)
  - [Methods](#Methods)
  - [Event](#event)
  - [Form Handling](#Form-Handling)
  - [Computed Properties](#Computed-Properties)
  - [Component](#component)

## Extensions to install
- Vue VSCode Snippets by sarah
- Vue official
## Shortcuts
- vbase-css --> create script, style and template tag, this is basic template required in vue.js
- 
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
#### File name 01-directive-ex1.html
- **v-html**--> transform in html. 
- **v-once**--> display variable content only once, even if variable value gets change dynamically that change will not refelect on the DOM where its applied.
- **v-bind**/ : --> bind variale (variable having url as content) to the element. v-bind shorthand is :(colon), we can bind inline css, css class....etc
- **v-show**--> to show or hide
- **v-once**
- **v-pre**

## Conditional Rendering
#### File name 02-conditional-rendering-ex1.html
- **if else**  --> task is to display given num is even or odd
- **if else if** ---> display if number is 0, positive, negative or not a number
- **display multiple elements if a condition met true**-->we can achieve this in two way
  - wrapping those element in another div tag
  - using template, this one is recomended as it will not introduce additional unnecessary div tag.
- **v-show** ---> used to show or hide elements (internally it uses display: nons css prop). the diff between v-if and v-show is v-if element will not be present  in DOM if condition does not meet, however element with v-show will be present in DOM with display:none prop.

## List Rendering
#### File Name 03-list-rendering-ex1.html
- List Rendering without key
- List Rendering with key
- List Rendering with index
- Rendering List of Objects
- Iterate through object props for example i have opject empInfo with props name, age. display name and age using v-for
- List Rendering without key
- List Rendering with key prop
- List Rendering with index
- Rendering List of Objects
- Iterate through Object Props
- Conditional List Rendering using template

## Methods
#### Using Options API (Vue 2 & Vue 3)
#### File Name 04-method-ex1.html
- Methods go inside methods: {}
- Access data using this
- Call methods in template without ()
#### Using Composition API (setup) – Recommended in Vue 3
### Async methods (both APIs)


## Event
#### File Name 05-event-ex1.html
- Event syntax ```v-on:click``` or ```@click```
- Inline Event handler :- Change name when anyone click on button
- Inline Event handler :- implement counter
- Method Event handler :- Change name when anyone click on button
   -  here in event handler we are logging event, this parameter vue js passes automatically to all no arg methods
- Method Event handler :- implement counter and log event
- Method Event handler :- calling multiple method on button click, in this case we have to pass event to no-arg method as well, if we want to log it.

## Form Handling
#### simple registration form File Name 06-form-handling-ex1.html
- Uses v-model for two way data binding, if we selet check box and check and uncheck it by default true/false value will be saved. If we want to check it we need to add true-value='Y' false-value= 'N' we can store this way.
#### Modifiers
- Kind of suffix we can add to either v-on or v-model directive to add some functionality inline within template . Helps to write cleaner code, below are few modifiers.
  - trim---> trim spaces.
  - number--> Lets say if we have salary field, by default java script will store it in string, if we want it to be stored in number we can use this modifier
  - prevent-->prevent page from refreshing when any one click on submit
  - lazy---> when we start typing it vue js will bind data it appears that binding is happening live, if we want binding happens after focus out of input we can use this modifier.
  - enter--> Lets say if we want to submit form on pressing Enter button of salary field we can comment submit button and specify ```@keyup.enter="submitForm"``` in the targeted field

  ## Computed Properties
  #### File Name :- 07-computed-properties-ex1.html
  - Properties that can be bound to the template like data properties. They are used for composing new data from existing source. They are high performant as they are cached calculations which only updates when their dependencies change
 #### computed property vs methods
 - To understand difference lets add some log in computedPropery and method
 - Run server
 - click on add item, u will observe log from both computed propery and method will be printed, as here computed property has dependency on item and its getting changed so it is being called.
 - Now try to input some value, lets say if i type rakesh, 6 times method will be called and 0 times computed property.
#### Computed Property vs V-For
### Computed Property Get And Set example

## Watchers
#### File Name = 08-watchers-ex1.html
- Allow u to watch any data or computed property and execute some code in response to changes in the vue. Example implemnet speed warning system.
#### Watchers vs computed peropery
- can i use watchers instead of computed property? Ans is yes, watchers simply provides a more generic way to react to data changes but its not recommended to mimic computed property to watchers.
- **use computed property** ->
  - when u need to compose new data from existing data source.
  - You need to reduce length of a variable.
- **use watchers**
  - you have to check if a property has changed to a favorable value to know if u are ready to perform an action
  - you want to call an http api in response to change in application data.
  - you have to apply transition.

#### Calling watchers when page gets loaded
#### Calling watchers on object type (by default watchers does not watch changes in deeply nested property, to get rid of this used deep: true property)
- **File Name** --> For above two use case check file name ```08-watchers-ex2.html```


## Component

### Branch 01-component-01
### Greet component
- crate new project using vite.
- create /component/GreetComp.vue file and export it
- imported exported component in app.vue file, and use it.
### Component props
- create new component /component/GreetCompWithProp.vue
- import and use this component in app.vue file.
### Props type, validation and default value
- create new component /component/product.vue
- we have defined productName of type String, productPrice of type Number if from app.vue file we pass price without v-bind ```:productPrice```, on console vue will show some warning.
- Similarily if we do not pass productName, since its required no matter v-bind is present or not it will give some warning. Just for FYI warning type related warning may not come for String as by default we passes each field value as string.
- We can aslo pass default value example for field exclusive we are passing default value to true.

### Non Prop Attributes
- In Vue, non-prop attributes are attributes passed to a component that are NOT declared as props in that component.They are still valid and automatically applied to the component’s root element ex, id, class and style attributes
- Create new component /component/NonPropCompExample.vue.
- Pass id from app.vue file, inspect and check element u will see what ever id we have added it got added to the root node of our component. If we comment root div/element in that case i would not be add to any of the element this is default behavior.
- If we want vue apply non prod attribute to specific element for that we can use ```v-bind="$attrs"
- Now it will add in both parent/root and the element you selected to add, if we do not want vuejs add to parent we can use ```inheritAttrs: false ``` in NonPropCompExample.vue file.

### Provide/Inject 
#### Branch 01-component-02
- **Definition :-** In Vue, provide / inject is a mechanism to share data or functions across components without passing props through every level (avoids prop drilling).
- Lets say we have A,B,C,D,E and F components components organized like A, B---have child-->D, C--->E---->F. Lets say i want to display Customer Name to A, D, and F component. To display customer name in nested component we can pass down it as prop but its not an ideal approach, to get rid of this (passing prop every level from C to E and E to F) we can use Provide/Inject this will make data directly available to targeted component.
  - Create components C,E,F, organize it as describe above.
  - add ```provide``` code in app.vue and ```inject``` code in ```F.vue``` file, verify output.  For Component F it will be able to rennder name what if we want customer name gets desplay on App.vue file as well for that we need to change ```provide``` from state to ```provide()``` object
 

### Custom component Events
- Lets say we have a popup.vue component with some content and close button in it, in app.vue component we have button to show popup and i want when anyone click on close button of popup.vue component, popup should be closed.
  - Create popup.vue file
  - Emit event from popup.vue to app.vue component
  - Bind the custom event using event binding property and assign handler to it. This is how we binded close event ```<Popup v-show="showPopup" @close="showPopup = false"></Popup>```
  - Now when emiting close event lets say i want to pass some object may be customerName in that case we need to define closePopup method in app.vue ```<Popup v-show="showPopup" @close="closePoup"></Popup>```
- **Validate Emitted Event**
   - create new file ```PopupEx2.vue```
   - write validation logic on it, now verrify log in console, u will see warning if ayoone click on close without enterring any value in input field.
 
### Component and v-model
#### Branch name 01-component-03
- Task--> create new custom input component, for example Input.vue. bind it with app component property(customer name).
   - Create Input.vue, bind it in app component using v-model without emit
   - Download vue dev tool chrome extension, inspect click on vue, it willl show component and its respective property.
   - now start typing in input box, u will observe customerName in inspected window will not change, to get rid of this write emiting logic in Input.vue and validate again.
 
### Slots
- **Definition** In Vue, slots are a way to let a parent component pass HTML content (markup) into a child component, while the child controls where that content is rendered. Think of slots as placeholders for content.
- **Task1**--> create a child component and pass html data/content to it from app.vue file
  - Create new file /components/SlotEx.vue
  - Add SlotEx.vue , pass html content and verify output.
- **Task 2** --> what if we have multiple slots in same file lets say file name is ```SlotEx2.vue``` and lets say there are header, footer and default slot, pass html content to all these respective slots
   - Create new component /components/SlotEx2.vue, define three slot.
   - Modify app.vue file, here we used attribute v-slot:<slot name> to identify to which slot content will go.

