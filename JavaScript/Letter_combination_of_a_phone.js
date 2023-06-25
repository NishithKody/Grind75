/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if(digits.length==0){
        return []
    }

    let map ={}
    map['2'] = ['a','b','c']
    map['3'] = ['d','e','f']
    map['4'] = ['g','h','i']
    map['5'] = ['j','k','l']
    map['6'] = ['m','n','o']
    map['7'] = ['p','q','r','s']
    map['8'] = ['t','u','v']
    map['9'] = ['w','x','y','z']

    let res = []
    let back = (i,cur)=>{
        if(i==digits.length){
            let val = cur.join('')
            res.push(val)
            return
        }

        let digit = digits[i] 

        for(let a of map[digit]){
            cur.push(a)
            back(i+1,cur)
            cur.pop()
        }

    }

    back(0,[])
    return res

    
};
