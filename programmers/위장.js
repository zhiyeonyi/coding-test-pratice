//생각: 종류별 갯수 파악 -> 갯수+1(0포함) 경우의 수 구함-> -1(모두 0일 경우를 대비)
//
const clothes =[["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]	
//return=5

function solution(clothes) {
    var kind = [];
    var kindNum = {};
    var answer = 1;
    for (let i =0; i<clothes.length; i++){
            kind.push(clothes[i][1])
//console.log(kind)
// [ 'headgear', 'eyewear', 'headgear' ]
    }
kind.forEach((x) => { 
  kindNum[x] = (kindNum[x] || 0)+1; 
    //console.log(kindNum)
// { headgear: 2, eyewear: 1 } 
});
    for (var key in kindNum){
                answer *= kindNum[key]+1;

    }
return answer-1;
}