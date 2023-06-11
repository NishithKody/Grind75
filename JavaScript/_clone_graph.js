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

    if(!node )
        return
    
    let map = new Map
    let q = []
    q.push(node)

    let newNode = new Node(node.val)
    map.set(node, newNode)

    while(q.length>0){
        let ele = q.shift()

        for(let n of ele.neighbors){
            if(!map.has(n)){
                let newNode = new Node(n.val)
                q.push(n)
                map.set(n,newNode)
            }

            map.get(ele).neighbors.push(map.get(n))
        }
        
    }

    return newNode
    
};
