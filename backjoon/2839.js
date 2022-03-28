let fs = require('fs');
let input = fs.readFileSync('example.txt').toString();

const N = +input
const five = 0;
const three = 0;

while(true){
    if(N%5===0){
        five = N/5;
        answer= five+three;
        break;
    }  else if(N < 0){
        answer = -1
        break;
    }
    N = N - 3;
    three++;
}

console.log(answer);