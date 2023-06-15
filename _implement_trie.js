class TrieNode{
    constructor(){
        this.children =[]
        this.isTrue = false
    }
}

class Trie{
    
    constructor(){
        this.root = new TrieNode()
    }

    insert(word){
        let cur = this.root

        for(let w of word){
            if(!cur.children[w])
            {
                let val = new TrieNode()
                cur.children[w]=val
            }
            cur = cur.children[w]
        }

        cur.isTrue = true

    }


    search(word){
        let cur = this.root

        for(let w of word){

            if(!cur.children[w]){
                return false
            }

            cur = cur.children[w]
        }

        return cur.isTrue

    }

    startsWith(word){

        let cur = this.root

        for(let w of word){

            if(!cur.children[w])
                return false
            
            cur = cur.children[w]
        }

        return true

    }


}
