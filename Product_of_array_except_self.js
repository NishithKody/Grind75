/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let res = []
    let pre = []
    let post = []

    let preVal = 1
    let postVal =1

    for(let i=0; i<nums.length; i++){
        preVal = nums[i]*preVal
        pre[i] = preVal 
    }

    for(let i=nums.length-1; i>=0; i--){
        postVal = nums[i]*postVal
        post[i]=postVal
    }

    res[0] = post[1]
    res[nums.length-1] = pre[pre.length-2]

    for(let i=1; i<nums.length-1; i++){
        res[i] = pre[i-1]*post[i+1]
    }

    return res

    
};
