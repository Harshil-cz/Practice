var total;
function main() {
    var num1 = parseInt(readLine(),10);
    var num2 = parseInt(readLine(),10);
    var num3 = parseInt(readLine(),10);
    
    avg(num1,num2,num3);

    var average=total;
    
    //assign the average value to the variable average 
    console.log(average);

}

//complete the function

function avg(a,b,c){
    total=(a+b+c)/3;
    return total;
}