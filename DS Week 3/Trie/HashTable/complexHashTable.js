class HashTable{
    
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hashFunction(key){
        let total=0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){// changes are implemented to avoid collision(separate chaining)
        const index=this.hashFunction(key)
        const bucket=this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        }
        else{
            const sameKey=bucket.find(item=>item[0]===key)
            if(sameKey){
                sameKey[1]=value
            }
            else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        const index=this.hashFunction(key)
        const bucket=this.table[index]
        const sameKey=bucket?.find(item=>item[0]===key)
        if(bucket){
            if(sameKey){
                return sameKey[1]
            }
        }
        return undefined
          
    }
    remove(key){
        const index=this.hashFunction(key)
        const bucket=this.table[index]
        const sameKey=bucket.find(item=>item[0]===key)
        if(bucket){
            if(sameKey){
                bucket.splice(bucket.indexOf(sameKey),1 )
            }
        }
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            const bucket=this.table[i]
            if(bucket&&bucket.length>0){
                for(let j=0;j<bucket.length;j++){
                    console.log(`${bucket[j][0]}: ${bucket[j][1]}`);
                }
            }
        }
    }
}
const table=new HashTable(40)
table.set("name","jithin")
table.set("age",26)
table.set("married",false)
// table.display()
module.exports=HashTable