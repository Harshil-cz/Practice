function main() {
    var year = parseInt(readLine(), 10)
    
    //the output
    console.log(calcCent(year));
    
}

//complete the function
function calcCent(a){
    var temp=a/100;
    // var century=Math.ceil(temp);
    // return century;
    return Math.ceil(temp);
}