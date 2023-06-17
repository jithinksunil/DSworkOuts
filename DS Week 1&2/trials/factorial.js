function factorialLoop(n){
    let answer=1
    for(let i=1;i<=n;i++){
        answer=answer*i
    }
    return answer
}
let n=0
console.log(factorialLoop(n));
console.log(factorialRecurssion(n));
function factorialRecurssion(n){
    if(n==1||n==0){
        return 1
    }
    return n*factorialRecurssion(n-1)
}