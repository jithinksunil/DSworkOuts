 class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hashFunction(key){// this must be complex enough not to create same index for different keys
        let total=0
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total%this.size
    }

    set(key,value){
        const index=this.hashFunction(key)
        this.table[index]=value
    }

    get(key){
        const index=this.hashFunction(key)
        return this.table[index]    
    }
    remove(key){
        const index=this.hashFunction(key)
        this.table[index]=undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i, this.table[i]);
            }
        }
    }
}
const table=new HashTable(50)

table.set("name","jithin")
table.set("age",26)
table.set("married",false)
table.display()