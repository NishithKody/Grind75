/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {

    let res = []

    intervals.sort((a,b)=>a[0]-b[0])


    res.push(intervals[0])

    for(let i=1; i<intervals.length; i++){
        let prev = res[res.length-1]
        let cur = intervals[i]

        if(prev[1]>=cur[0]){
            let start = Math.min(prev[0],cur[0])
            let end = Math.max(prev[1],cur[1])
            res.pop()
            res.push([start,end])
        }
        else{
            res.push(intervals[i])
        }
    }

    return res
    
};
