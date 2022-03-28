//계단오르기

let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');
console.log(input)

const stairs = input.map((n)=>Number(n))
// console.log(stairs)
// 계단마다 점수들을 stairs에 배열화

const N = stairs[0]
//배열 헷갈리지 않게 1번째 계단이 n이 될 수 있게
console.log(N)

const dp = Array.from(new Array(N+1));
//dp[n]은 계단이 n개일때 얻는 최대 점수값
dp[1] = stairs[1];
dp[2] = dp[1] + stairs[2];
dp[3] = Math.max(stairs[1],stairs[2]+stairs[3]);
for (let i = 4; i <= N; i++) {
    dp[i] = Math.max(
      dp[i - 3] + stairs[i - 1] + stairs[i],
      dp[i - 2] + stairs[i]
    );
  }
  console.log(dp[N]);