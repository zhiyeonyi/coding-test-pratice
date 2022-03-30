let input = [1,10,13,100,1000,10000,100000,0]

const len= input.length
const answer = 0

for(let i=0; i<len; i++) {
    if(input[i]=0){
        break;
    }

    for(let j=input[i]+1; j<=2*input[i]; j++){
//     answer++
// 에라토스테네스의 체
for (let k = j; k<=Math.sqrt(); k++) {
    if ( j% k === 0) {
        answer--;
        break;
    }
}    }
    
}
console.log(len)