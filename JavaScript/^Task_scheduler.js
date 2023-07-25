/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let heap = new MaxPriorityQueue()
    let time = 0
    let map = new Map()
    let queue = []

    for(let task of tasks){
        map.set(task, map.get(task)+1 || 1)
    }

    for(let [key,val] of map.entries()){
        heap.enqueue(val)
    }

    // console.log('map',map)
    // console.log('heap',heap)

    while(heap.size()>0 || queue.length >0){
        time++;
        // console.log('time',time)

        if(heap.size()>0){
            let ele = heap.dequeue().element
            ele--
            if(ele>0){
                queue.push([ele,time+n])
                // console.log('updated queue on heap',queue)
            }
            
        }

        if(queue.length>0){
            let peek = queue[0]
            
            if(time == peek[1]){
                // console.log('heap add from queue',peek[0])
                heap.enqueue(peek[0])
                let v = queue.shift()
            }
        }
    }

    return time
    
};
