// switch(true){
//     case (height>=depth):
//         {
//             console.log(day);
//         }
//     break;

//     case (height<depth):
//         {
//             day++;
//             height+=7;
//             if(height>=depth){
//                 console.log(day);
//             }
//             height-=2;
//         }
//     break;
// }

// function main() {
//     var depth =31//parseInt(readLine(), 10);
//     //your code goes here
//     var height=7;
//     var day=1;

//     if(height>=depth){
//         console.log(day);
//     }
//     else{
//         height-=2;
//         for(var i=0;height<depth;i++){
//             day++;
//             height+=7;
//             if(height>=depth){
//                 console.log(day);
//                 break;
//             }
//             height-=2;
//         }
//     }
// }

// main();


function main() {
    var depth =128//parseInt(readLine(), 10);
    //your code goes here
    var height=7;
    var day=1;
    
    if(height>=depth){
        console.log(day);
    }
    else{
        height-=2;
        for(var i=0;height<depth;i++){
            day++;
            height+=7;
            if(height>=depth){
                console.log(day);
                break;
            }
            height-=2;
        }
    }
}

main();
