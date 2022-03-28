const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('/n');

const N = +input.shift();

let stack = [];
let answer = [];

for(let i=0; i<N; i++) {
    switch(input[i]){
        case 'pop':
            answer.push(stack.pop()|| -1);
            break;
            
        case 'top':
            anwer.push(stack[stack.length -1]|| -1);
            break;
            
        case 'size':
            answer.push(stack.length);
            break;
            
        case 'empty' :
            answer.push(stack[0] ? 0:1);
            break;
        default:
            stack.push(Number(input[i].split('')[1]));
            break;
    }
}

console.log(anser.join('/n'));