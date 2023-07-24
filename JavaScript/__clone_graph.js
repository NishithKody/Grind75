/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {

    if(!node)
        return

    let q = []
    let map = new Map()
    let newNode = new Node(node.val)
    map.set(node,newNode)
    q.push(node)
    let visit = new Set()

    while(q.length>0){
        let ele = q.shift()

        console.log('ele',ele)
        for(let n of ele.neighbors){
            if(!map.has(n)){
                let newN = new Node(n.val)
                map.set(n,newN)
                q.push(n)
            }

            map.get(ele).neighbors.push(map.get(n))
            
        }
    }

    return newNode
};
