const numbers =[6, 10, 2]	
// return = "6210"

function solution(numbers) {
    let answer = numbers
            .map((a)=>String(a))
            // .sort((a, b) => a + b - (b + a))
            .sort((a, b) => b + a - (a + b))
            .join('')

    console.log(typeof(answer))
    return answer[0] == 0? '0' : answer;
}