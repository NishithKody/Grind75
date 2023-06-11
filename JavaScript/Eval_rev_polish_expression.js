/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {

    let stack = []

    let res =0

    for(let i of tokens){
        if(isNaN(i)){
            let b = parseInt(stack.pop())
            let a = parseInt(stack.pop())

            if(i=='+'){
                let val = a +b
                stack.push(val)
            }
            else if(i=='-'){
                let val = a-b
                stack.push(val)
            }
            else if(i=='*'){
                let val = a*b
                stack.push(val)
            }
            else if(i=='/'){
                let val = parseInt(a/b)
                stack.push(val)
            }
        }
        else{
            stack.push(i)
        }
    }

    return stack.pop()
    
};
