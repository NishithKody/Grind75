/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let n = nums.length

    let low = 0
    let high = n-1

    while(low<=high){
        let mid = Math.floor((low+high)/2)
        console.log('mid',mid)
        if(nums[mid]==target){
            return mid
        }

        //left
        if(nums[low]<=nums[mid]){
            if(target<nums[mid] && target>=nums[low] )
            {
                high=mid-1
            }
            else{
               low=mid+1
            }

        }
        else{
            if(target>nums[mid] && target<=nums[high]){
                low = mid+1
            }
            else{
                high = mid-1
            }
        }
        
    }

    return -1
    
};
