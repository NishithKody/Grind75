/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    nums.sort((a,b)=>a-b)
    // console.log('nums',nums)
    let set = new Set()

    let res = []
    for(let i=0; i<nums.length; i++){
        let l =i+1
        let r= nums.length-1
        while(l<r){
            if(nums[i] + nums[l] + nums[r]==0){
                if(set.has(nums[i]+'|'+nums[l]+'|'+nums[r])){
                    l++
                    continue
                }
                    
                res.push([nums[i],nums[l],nums[r]])
                set.add(nums[i]+'|'+nums[l]+'|'+nums[r])
                l++
            }
            else if(nums[i] + nums[l] + nums[r]<0){
                l++
            }
            else{
                r--
            }
        }
    }

    return res
    
};
