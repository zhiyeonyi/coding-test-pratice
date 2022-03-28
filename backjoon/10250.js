let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

const testCase= parseInt(input.shift())
// console.log(testCase)

for(let i = 0 ;i <testCase; i++){
    const arr= input[i].split(' ')
    const H = parseInt(arr[0]);
    const N = parseInt(arr[2]);
    //console.log(arr)
    
    if(N % H === 0){
       Y = H; 
       X = N / H;
    }else{
     Y = N % H;
     X = Math.floor(N / H)+1;
   }
   
   if(X < 10){X = `0${X}`;}
    console.log(Number(`${Y}${X}`));
  
 }
