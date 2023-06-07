/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let left = []
    let right = []
    let res = []

    for(let i of intervals){
        if(i[1]< newInterval[0])
        {
            left.push(i)
        }
        else if(i[0] > newInterval[1])
        {
            right.push(i)
        }
        else{
            let low = Math.min(i[0],newInterval[0])
            let high = Math.max(i[1],newInterval[1])
            newInterval = [low,high]
        }
    }

    left.push(newInterval)
    for(let i of right)
        left.push(i)

    return left
    
};
