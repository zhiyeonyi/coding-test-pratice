function solution(nums) {
    let answer = 0;
    
    for (let i = 0; i<nums.length-2; i++) {
        for (let j = i+1; j<nums.length-1; j++) {
            for (let k = j+1; k<nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k]
                answer++;
                
                for (let n = 2; n<=Math.sqrt(sum); n++) {
                    if (sum % n === 0) {
                        answer--;
                        break;
                    }
                }
            }
        }
    }
    
    return answer;
}
 
 
return answer

// 1) Math.sqrt(x)
// 주어진 숫자의 제곱근을 반환. 숫자가 음수이면 NaN 이 반환된다
// x 값 이 음수이면 Math.sqrt() 는 NaN 을 반환한다.

// 2) break
// 탈출문으로 반복문에서 탈출하는 코드