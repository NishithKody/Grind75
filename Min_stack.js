class MinStack {
    constructor(){
        this.stack = []
        this.minStack = []
    }

    //0 1
    //0 

    push(val){
        if(this.stack.length==0){
            this.stack.push(val)
            this.minStack.push(val)
        }
        else{
            this.stack.push(val)

            let minVal = this.minStack[this.minStack.length-1]
            if(val<=minVal){
                this.minStack.push(val)
            }
        }
    }

    pop(){
        let ele = this.stack.pop()
        if(ele == this.minStack[this.minStack.length-1])
        {
            this.minStack.pop()
        }
        return ele

    }

    top(){
        let len = this.stack.length
        return this.stack[len-1]
    }

    getMin(){
        let len = this.minStack.length
        return this.minStack[len-1]
    }

}
