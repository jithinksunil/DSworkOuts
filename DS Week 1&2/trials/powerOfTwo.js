function powerOfTwo(n){
    let temp=1
    while(n>=temp){//O(n)
        if(temp==n){
            return true
        }
        temp=temp*2
    }
    return false
}
function powerOfTwoWithLog(n){
    if(Math.log2(n)%1==0){//O(1)
        return true
    }
    return false
}
let n=3
console.log(powerOfTwo(n));
console.log(powerOfTwoWithLog(n));