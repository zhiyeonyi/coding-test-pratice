const n =3;
const computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]]	

function solution(n, computers) {
    let visited = [false];

    let answer = 0;

    function dfs(i) {
        visited[i] = true;
        for(let j=0; j<computers[i].length; j++) {
            if(computers[i][j]===1 && !visited[j]){
                dfs(j);
            }
        }
    }
    
    for (let i=0; i < computers.length; i++) {
        if (!visited[i]) {
            dfs(i)
            answer++;
        }
    }
    console.log(answer)
    return answer;
}
// __________________________________________________________

// function solution(n, computers) {
//     var answer = 0;
    
//     const check = [];
//     for(const computer of computers){
//         check.push(false);
//     }
        
//     function DFS(index){
//         check[index] = true;
        
//         for(let i = 0; i< computers.length; i++ ){
//             if(computers[index][i] === 1 && !check[i]){
//                 DFS(i);
//             }
//         }
//     }
    
//     for(let  i = 0;  i < computers.length; i++ ){
//         if(!check[i]){
//             DFS(i);
//             answer+=1;
//         }
//     }
        
//     return answer;
// }

