// brown	yellow	return
// 10	2	[4, 3]  [4,3]
// 8	1	[3, 3]  [3,3]
// 24	24	[8, 6]  [8,6]

function solution(brown, yellow) { 
    var answer = []; 
    let sum = brown + yellow; 

    for(let height=3; height<=brown; height++){
        if(sum % height === 0){
            let weight = sum / height; 
            if( (height-2) * (weight-2) === yellow){
                return [weight, height];
            } 
        } 
    } 
    return answer; 
}

// --------------------------------

// 가로 :x 세로:y

// yellow: (x-2)*(y-2)
// brown: xy-yellow
// brown : 2(x+y-2)
// x+y = brown/2 +2

function solution(brown, yellow) {
    let sum = (brown / 2) + 2;  // 가로, 세로의 합
   
    for (let i = sum-1; i >= sum/2; i--) {
      let row = i;
      let column = sum-i;
      if (yellow === (row - 2)*(column - 2)) return [row, column];
    }
  }