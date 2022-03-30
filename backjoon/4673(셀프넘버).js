//풀이로 생각한것 : 자릿수 나누기 , true/false배열로 만들기 
function d(){
    let num;
    let array = [];
    for(let n = 1; n < 10000; n++){
        if(n < 10){ // n이 한자리 일 때
            num = 2*n;
        }else if(10 <= n < 100){ // n이 두자리일 때
            num =  n + (Math.floor(n / 10)) + (n % 10);
        }else if(100 <= n < 1000){ // n이 세자리 일 때
            num = n + (Math.floor(n / 100)) + (Math.floor((n % 100) / 10)) + (n % 10);
        }else if(1000 <=  n < 10000){ // n이 네자리일 때
            num = n + (Math.floor(n / 1000)) + (Math.floor((n % 1000) / 100)) + (Math.floor((n % 100) / 10) ) + (n % 10);
        }else{ 
            num = 10001;
        }
        array.push(num);
    }
    // 생성자를 갖는 배열 array
    for(let i = 1; i <= 10000; i++){
        if(!array.includes(i)){
            console.log(i);
        }
    }
    //true/false가 더 속도가 빠름

}
d();