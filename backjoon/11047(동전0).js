const fs = require('fs')
const input = fs.readFileSync('example.txt').toString().trim().split('/n');

//생각 : 동전을 배열에 넣고 큰수부터 순차적으로 빼기

const N = input[0][0];
  let K = input[0][1];
  let count = 0;
  let coins = [];

  for (let i = 1; i <= N; i++) {
    coins.push(input[i]);
  }

  for (let j = coins.length; j >= 0; j--) {
    if (coins[j] <= K) {
      count += Math.floor(K / coins[j]);
      K = K % coins[j];
    }
  }

console.log(count);

