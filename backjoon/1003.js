let fs = require('fs');
let input = fs.readFileSync('example.txt').toString().split('\n');

const testCount = input[0];
const Nlist = input.slice(1)

// f(0) = [1,0]
// f(1) = [0,1]
// f(2) = [(f(2-2)[0]+f(2-1)[0]),f(2-2)[1]+f(2-1)[1]]
// f(n) = [(f(n-2)[0]+f(n-1)[0]),f(n-2)[1]+f(n-1)[1]] (n>1)
// arr(n) = [f(0),f(1),f(2),...f(n)] 
//     =[[1,0],[0,1],[1,1],[1,2],...]



for(let i=0; i <Nlist; i++) {
    const n = input[i];
    const arr = [[1,0],[0,1]];

    for (let j =2; j<=n; j++) {
        arr[j] = [
            arr[j-2][0]+arr[j-1][0],arr[j-2][1]+arr[j-1][1]
        ];
    }
    console.log(testCount)
    console.log(arr[n].join(" "))
}


