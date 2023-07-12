function add(a,b){
    return a+b;
}
function divide(a,b){
    return a/b;
}
function calculate (x,y,operation){
    return operation(x,y);
}
console.log(calculate(2,2,add));

//2......//

function greet(name,callback){
    console.log('hi' + " " +name);
    
    callback();
}
function callme(){
    console.log("i am callback");
}
greet("preeti",callme);
