class HashTable{
    constructor(size){
        this.items=new Array(size)
        this.size=size
    }
    hashFunction(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total%this.size
    }
    set(key,value){
        const index=this.hashFunction(key)
        if(!this.items[index]){
            this.items[index]=[[key,value]]
        }else{
            this.items[index].push([key,value])
        }
    }
    get(key){
        const index=this.hashFunction(key)
        if(this.items[index]&&this.items[index].length>=1){
            let sameKey=this.items[index].find(item=>item[0]===key)
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined   
    }
    display(){
        for(let i=0;i<this.items.length;i++){
            const bucket=this.items[i]
            if(bucket&&bucket.length>0){
                for(let j=0;j<bucket.length;j++){
                    console.log(`${bucket[j][0]}: ${bucket[j][1]}`);
                }
            }
        }
    }
}
const hash=new HashTable(50)
hash.set('name',"jithin")
hash.set('age',26)
hash.set('aeg','kvk')
console.log(hash.get("aeg"));
// hash.display()