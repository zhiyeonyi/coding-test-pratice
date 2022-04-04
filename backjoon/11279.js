const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('\n');

const n=input.shift();
const answer = []; //담는 배열

for(let i=0; i<input.length; i++){
    const num = Number(input[i]);

    var max = Math.max(...answer);
    console.log(max)
    if(num ===0 ){
        answer.length === 0 ? console.log(0) :
        console.log(max) && answer.filter((e)=> e !== max) 
    } else if(num%1===0)
        answer.push(num)
    }
    // num===0 ? console.log(max) && input.filter((e) => e == max) : answer.push(num)

    console.log(answer)

}




