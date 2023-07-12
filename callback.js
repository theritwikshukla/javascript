var callbackfctn;
//in call back function we passes argument to another function
function abc(name,cb){
    console.log("hello abc",name)
    console.log(cb)
    cb()
}
function pqr(){
    console.log("hello pqr")
}
abc("smita",pqr)