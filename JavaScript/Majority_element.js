/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) 
{
    let map = new Map()

    for(let i of nums)
    {
        map.set(i, map.get(i)+1 || 1)
    }

    let max = 0
    let res = 0

    for(let i of map){
        if(i[1]>max){
            max=i[1]
            res = i[0]
        }
    }

    return res

};
