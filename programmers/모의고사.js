function solution(answers) {
    var answer = [];
    let arr1 = [1,2,3,4,5,]
    let arr2 = [2,1,2,3,2,4,2,5]
    let arr3 = [3,3,1,1,2,2,4,4,5,5]
    let count = [0,0,0]
    
    for (let i=0; i<answers.length; i++){
        arr1[i%5] === answers[i] ? count[0]++ : null;
        arr2[i%8] === answers[i] ? count[1]++ : null;
        arr3[i%10] === answers[i] ? count[2]++ : null;
    }

    const maxValue = Math.max(...count);

    for (let j=0; j<count.length; j++){
    if (maxValue === count[j]) {answer.push(j+1)}
    }
    
    return answer;
}