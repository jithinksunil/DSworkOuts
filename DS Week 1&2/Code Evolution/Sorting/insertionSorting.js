let arr=[5,1,3,4,45,5,6,3,6,743,35,45]
console.log(insertionSorting(arr));
function insertionSorting(arr){
    for (let i=1;i<arr.length;i++){
        let insertingElement=arr[i]
        for(let j=i-1;j>=0;j--){
            if(insertingElement<arr[j]){
                arr[j+1]=arr[j]
            }
            else{
                arr[j+1]=insertingElement
                break;
            }
            if(j==0){
                arr[j]=insertingElement
            }
        }
    }
    return arr
}