class MyQueue{
    constructor(){
        this.s1 = []
        this.s2 = []
    }

    push(x){

        while(this.s1.length!=0){
            let ele = this.s1.pop()
            this.s2.push(ele)
        }

        this.s1.push(x)

        while(this.s2.length!=0){
            let ele = this.s2.pop()
            this.s1.push(ele)
        }
    }

    pop(){
        return this.s1.pop()
    }

    peek(){
        let n = this.s1.length

        return this.s1[n-1]
    }

    empty(){
        if(this.s1.length==0)
            return true
        else    
            return false
    }
    
}
