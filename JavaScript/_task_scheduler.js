/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {

    let heap =  new MaxPriorityQueue()
    let queue = []
    let map = new Map()

    let time = 0

    for(let task of tasks){
        map.set(task,map.get(task)+1 || 1)
    }

    let values = [...map.values()]

    for(let val of values){
        heap.enqueue(val)
    }

    while(heap.size() >0 || queue.length>0){

        time++
        if(heap.size() >0){
            let ele = heap.dequeue().element
            ele--
            if(ele!=0)
            {
                queue.push([time+n, ele])
            }
        }

        if(queue.length>0){
            if(queue[0][0]==time){
                let ele = queue.shift()
                heap.enqueue(ele[1])
            }
        }
 
    }

    return time
    
};
