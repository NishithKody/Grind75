/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0
    let right = nums.length-1
    let index =0

    let swap = (a,b)=>{
        let temp = nums[a]
        nums[a] = nums[b]
        nums[b] = temp
    }

    //[0,0,1,1,2,2]
    //     L
    //       R
    //     i

    while(index<=right){
        if(nums[index]==0){
            swap(index,left)
            left++
            index++;
        }
        else if(nums[index]==2){
            swap(index,right)
            right--
        }
        else{
            index++
        }
    }

    return nums
    
};
