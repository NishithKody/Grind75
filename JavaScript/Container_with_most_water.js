/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let res = 0 
    let l =0
    let r = height.length-1

    while(l<r){

        let temp = 0;

        if(height[r]>height[l]){
            temp = (height[l]) * (r-l)
            l++
        }
        else{
            temp = (height[r]) * (r-l)
            r--
        }

        res= Math.max(res,temp)
    }

    return res
    
};
