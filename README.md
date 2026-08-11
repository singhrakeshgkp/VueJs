# VueJs
- Basic
  - [Extensions to install](#Extensions-to-install)
  - [Shortcuts](#Shortcuts)
  - [Composition API](#composition-api)
  - [Ref vs Reactive](#ref-vs-reactive)
  - [Directive](#directive)
  - [Conditional Rendering](#Conditional-Rendering)
  - [List Rendering](#List-Rendering)
  - [Methods](#Methods)
  - [Event](#event)
  - [Form Handling](#Form-Handling)
  - [Watchers](#Watchers)
  - [Component](#component)

## Extensions to install
- Vue VSCode Snippets by sarah
- Vue official
- Bracket view colorization togler
- Live server
## Shortcuts
- vbase-css --> create script, style and template tag, this is basic template required in vue.js

# Composition api
## Script tag with ```setup``` and without it
- ```<script setup>``` eliminates the need to export default, define setup(), and use the return statement
- ```<script setup>```, imported components and functions can be used in your template immediately. Without it, you must register components manually in a components: {} object
- In <script setup>, you use compiler macros like defineProps() and defineEmits()
- Without it, you pass props and context as arguments into the setup(props, context) function.

## Ref vs Reactive
- ref we use with primitive type however reactive we use with object. ref we can use with both primitive and object but reactive can not be used with primitive
  ```
  access ref object
  employees=ref({name:'rakesh'})  employees[0].value.name    this way we can access ref object
  ```

## Directive
#### File name 01-directive-ex1.html

``` v-html, v-once, v-bind, v-show, v-pre ```

## Conditional Rendering
``` if elsse```

## List Rendering
- List Rendering without key, List Rendering with key, List Rendering with index, Rendering List of Objects
- Iterate through object props for example i have opject empInfo with props name, age. display name and age using v-for
- List Rendering with key prop, Conditional List Rendering using template

## Props
## Computed Property
- ComputedPropEx.vue -----> Dispaly Full Name


## Methods
## Event
- Event syntax ```v-on:click``` or ```@click```
- 
## Form Handling
#### Modifiers
- Kind of suffix we can add to either v-on or v-model directive to add some functionality inline within template . Helps to write cleaner code, below are few modifiers.
  - trim---> trim spaces.
  - number--> Lets say if we have salary field, by default java script will store it in string, if we want it to be stored in number we can use this modifier
  - prevent-->prevent page from refreshing when any one click on submit
  - lazy---> when we start typing it vue js will bind data it appears that binding is happening live, if we want binding happens after focus out of input we can use this modifier.
  - enter--> Lets say if we want to submit form on pressing Enter button of salary field we can comment submit button and specify ```@keyup.enter="submitForm"``` in the targeted field

## Watchers
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


# Component
- there are three ways to import component.
  - **Locally ---->** Components are isolated. You import them directly into the file that needs them. If another file needs the same component, it must import it again
  - **Globally ---->** You register components individually right inside your main application instance. This makes them available everywhere, but it can quickly make your main file massive if you have dozens of components.
  - **The plugin/install method --->** Instead of cluttering main.js, you create a dedicated JavaScript/TypeScript file that packages your components into a Vue Plugin. Vue plugins expose an install method that hooks directly into the app lifecycle
  - 
