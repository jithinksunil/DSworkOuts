let n=6;
console.log(fibonacci(n));
 
function fibonacci(n){
    if(n<2){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);

}
//Time complexity- O(2^n)