

///A lexical environment is a data structure that holds identifier-variable mapping


helloWorld();
//function helloWorld(){
//  console.log('Hello World!');
//}

//var helloWorld = function(){
//    console.log('Hello World!');  prints 'Hello World!'
//  }
//helloWorld();

//console.log(a); 
//var a = 3;

//let a;
//console.log(a); // outputs undefined
//
//a = 5;

//function foo () {
//    console.log(a);
//  }
//  let a = 20;
//  foo();  // This is perfectly valid

let Person = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
let peter = new Person('Peter', 25); 
console.log(peter);