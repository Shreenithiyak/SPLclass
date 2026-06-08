const ab=(some,callback)=>{
console.log("js"+some);
callback();
}
const cd=()=>{
    console.log("difficulty");
}
ab("is",cd);