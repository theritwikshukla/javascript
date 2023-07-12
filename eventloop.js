function one(b){
    const a=10;
    return a+b+2;
}
function two(x){
    const y=4;
    return one(x*y);
}
const three=two(5);
