/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let res = []
            //[]
            //1    []
          //2  []   2  []

    let dfs =(i,cur)=>{

        if(i==nums.length)
        {   
            res.push(Array.from(cur))
            return 
        }

        cur.push(nums[i])
        dfs(i+1,cur)
        cur.pop()

        dfs(i+1,cur)

    }

    dfs(0,[])
    return res    
};
