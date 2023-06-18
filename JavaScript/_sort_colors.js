/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {

    let left = 0
    let right = nums.length-1

    let swap = (a,b)=>{
        let temp = nums[a];
        nums[a]=nums[b];
        nums[b]=temp;
    }
    let i =0;

    while(i<=right)
    {
        if(nums[i]==0){
            swap(i,left)
            left++
        }

        if(nums[i]==2){
            swap(i,right)
            right--
            i--
        }

        i++        
        
    }

};
