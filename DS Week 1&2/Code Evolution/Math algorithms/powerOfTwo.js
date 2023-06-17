let n=-5
console.log(powerOfTwo(n));
console.log(powerOfTwoOptimised(n));
console.log(powerOfTwoLotOptimised(n));

function powerOfTwo(n){
    if(n==1){
        return true
    }
    let value=2
    while(value<=n){
        if(value==n){

            return true
        }
        value=value*2;
    }
    return false
}
function powerOfTwoOptimised(n){
    if(Math.log2(n)%1==0){
        return true
    }
    return false
}
function powerOfTwoLotOptimised(n){
    if(n<1){
        return false
    }
    return (n & (n-1)) == 0
}