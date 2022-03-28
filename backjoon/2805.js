let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

const [N, M] = input.shift().split(' ');
// N은 나무수
// M은 필요한 나무m
const trees = input[0].split(' ').map(Number).sort((a,b) => a-b);
//나무 길이 순서대로 배열

function solve(arr, target) {
    let right = 0;
    let left = arr[arr.length-1];
    let answer = Number.MIN_SAFE_INTEGER;
    while(right <= left) {
        let mid = Math.floor((right + left)/2);
        let sum = 0;
        for(let x of arr) {
            if(x > mid) sum += x-mid;
        }

        if(sum >= target) {
            if(mid > answer) answer = mid; 
            // 최댓값 계속 구해주기.
          	// 이 부분을 제외하고는 일반적인 이분탐색 코드와 똑같다.
            right = mid + 1;
        } else {
            left = mid - 1;
        }
    }

    return answer;
}


console.log(solve(trees, M))