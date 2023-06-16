/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    let res = []
    let cur = []

    let visit = new Set()

    let backtrack = (i,cur)=>{

        if(i==nums.length){
            res.push(Array.from(cur))
            return
        }

        for(let n of nums){
            if(visit.has(n))
                continue
            
            visit.add(n)
            cur.push(n)

            backtrack(i+1,cur)

            cur.pop(n)
            visit.delete(n)

        }

    }

    backtrack(0,[])
    return res
    
};
