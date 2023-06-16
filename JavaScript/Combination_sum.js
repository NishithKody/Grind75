/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {

    let res = []
    let cur = []

    let backtrack = (i, total, cur) =>{
        if(total==target){
            res.push(Array.from(cur))
            return
        }

        if(total>target || i>=candidates.length){
            return
        }

        cur.push(candidates[i])
        backtrack(i,total + candidates[i],cur)
        cur.pop(candidates[i])
        backtrack(i+1,total, cur)

    }

    backtrack(0,0,[])
    return res
    
};
