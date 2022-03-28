let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

const count = Number(input[0]);

const stack = [];
const sum = 0;

for(let i=1; i<=count; i++){
    const o = Number(input[i])
    if(o===0){
        stack.pop();
    }else{
        stack.push(o);
    }
}

for(let i =0; i<stack.length; i++){
    sum += stack[i]
}

console.log(sum)