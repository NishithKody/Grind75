/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {

    let dist = (p)=>{
        return Math.pow(p[0],2) + Math.pow(p[1],2)
    }

    let heap = new MaxPriorityQueue({ priority : item=>item[0]})

    for(let i of points){
        let d = dist(i)

        if(heap.size()>=k){
            let [cost,point] = heap.dequeue().element
            if(cost<d){
                heap.enqueue([cost,point])
            }
            else{
                heap.enqueue([d,i])
            }
        }
        else{
            heap.enqueue([d,i])
        }
    }

    let res = []
    while(heap.size()!=0){
        let [cost,p] = heap.dequeue().element
        res.push(p)
    }

    return res
    
};
