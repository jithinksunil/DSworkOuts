class GenaralTrie{
    constructor(string=''){
        let newNode=new GenaralTrieNode(true)
        this.root=newNode
        if(string!=''){
            this.addWord(string)
        }
        
    }
    addWord(string){
        let currentNode=this.root
        for(let i=0;i<string.length;i++){
            let character=string[i]
            if(currentNode.children[character]){
                currentNode=currentNode.children[character]
            }else{
                let newNode=new GenaralTrieNode(character)
                currentNode.children[character]=newNode
                currentNode=newNode
            }
        }
        currentNode.end=true
    }

    removeWord(string){
        let currentNode=this.root
        for(let i=0;i<string.length;i++){
            let character=string[i]
            if(currentNode.children[character]){
                currentNode=currentNode.children[character]
            }else{
                console.log('word does not contain');
                return 
            }
        }
        currentNode.end=false
    }

    contains(string){
        let currentNode=this.root
        for (let i=0;i<string.length;i++){
            let character=string[i]
            if(currentNode.children[character]){
                currentNode=currentNode.children[character]
            }else{
                return false
            }
        }
        return currentNode.end?true:false
    }
}
class GenaralTrieNode{
    constructor(character){
        this.value=character
        this.children={}
        this.end=false
    }
}

let trie=new GenaralTrie()
trie.addWord('jithin')
console.log(trie.contains(''));