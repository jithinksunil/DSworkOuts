 let n=10;
 let array=[]
 for (let i=0;i<n;i++){
    if(i==0){
        array.push(0)
    }
    if(i==1){
        array.push(1)
    }
    if(i>1){
        array.push(array[i-1]+array[i-2])
    }
 }
 console.log(array);