/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []

    for(let i of s){
        if(i=='(' || i=='[' || i=='{'){
            stack.push(i)
        }
        else{
            let ele = stack.pop()
            if(i==')'){
                if(ele!='('){
                    return false
                }
            }

            if(i==']'){
                if(ele!='['){
                    return false
                }
            }

            if(i=='}'){
                if(ele!='{'){
                    return false
                }
            }

        }
    }
    
    // Consider the tc where no closing brackets are provided, in those situations, we will have a stack which is not empty. Example -- '(('
    if(stack.length!=0)
        return false

    return true
};
