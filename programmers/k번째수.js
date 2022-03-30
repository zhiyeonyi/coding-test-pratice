const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]	

function solution(array, commands) {
    var answer = [];
    for (let n=0; n<commands.length; n++){
        const i=commands[n][0];
        const j=commands[n][1]
        const k= commands[n][2]
        // a=array.slice(commands[n][0]-1,commands[n][1])
        const arr2 = array.slice(i-1,j).sort();
        answer.push(arr2[k-1])
        // for (let m=0; m<arr2.length)
        console.log(arr2,k)
        // console.log(arr2.length)
        // console.log(arr2[k-1])
        // answer.push(arr2[k-1])
    }
    return answer;
}


function solution(array, commands) {
    return commands.map(command => {
        const [sPosition, ePosition, position] = command
        const newArray = array
            .filter((value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1)
            .sort((a,b) => a - b)    

        return newArray[position - 1]
    })
}