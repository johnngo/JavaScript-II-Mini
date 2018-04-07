/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - 80% of use case, left of the Dot at Call Time
* 2. Explicit Binding
* 3. new Binding
* 4. window Binding
*
* write out a code example of each explanation above
*/

console.log('hello world!');

// Principle 1

// code example for Window Binding
var sayAge = function() {
    'use strict';
    console.log(this.age);
};
var me = {
    age:25
}
sayAge(); //nothing to the left of the dot, default to window object
window.age =35;
sayAge();

// Principle 2

//               code example for Implicit Binding

// var me = {
//     name: 'John',
//     age: 25,
//     sayName: function() {
//         console.log(this.name);
//     }
// }

// me.sayName();
// var me = {
//     name: 'Tyler',
//     age: 25,
//     sayName: function() {
//         console.log(this.name);
//     }
// }

// me.sayName();

var sayNameMixin = function(obj) {
    obj.sayName = function() {
      console.log(this.name)
    };
  };
  
  var me = {
    name: 'tyler',
    age:25
  };
  
  var you = {
    name: 'john',
    age: 21
  }
  
  sayNameMixin(me);
  sayNameMixin(you);
  
  me.sayName()
  you.sayName()

// Principle 3

// code example for New Binding
var Animal = function(color, name, type){
    //this = {}
    this.color = color;
    this.name = name;
    this.type =type;
};
var zebra = new Animal('black and white','zorro', 'zebra');
// Principle 4

// code example for Explicit Binding

var sayName = function(lang1,lang2,lang3) {
    console.log('My name is ' + this.name + 'I know' +lang1 + lang2 + lang3);
};

var stacey = {
    name: 'Stacey',
    age: 34
};

var languages = ['Javascript', 'Ruby', 'Python'];
sayName.call(stacey, languages[0], languages[1], languages[2]);

sayName.apply(stacey, languages)

var newFn = sayName.bind(stacey, languages[0], languages[1], languages[2]);
console.log('here')
newFn()
