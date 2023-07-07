/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function(n, edges) {

    let adj = {}
    for(let i=0; i<n; i++){
        adj[i]=[]
    }

    for(let [cur,next] of edges){
        adj[cur].push(next)
        adj[next].push(cur)
    }

    // console.log(adj)
    let res = Infinity
    let res_node = []

    let ht = (node,visit)=>{
        
        // console.log('ht call ',node,visit)
        // console.log('---------------------')
        if(visit.has(node))
            return 0
        
        visit.add(node)

        let temp = 0

        for(let i of adj[node])
        {
            // console.log('in the for loop, value ',i)
            let val = ht(i,visit)
            // console.log('for loop call value',val)

            if(val>temp){
                temp =val
            }
            // console.log('temp value',temp)
        }

        return temp +1

    }

    for(let i=0;i<n;i++){
        let visit = new Set()
        let val = ht(i,visit)

        if(val==res){
            res_node.push(i)
        }
        else if(val<res){
            res = val
            res_node = []
            res_node.push(i)
        }
    }

    return res_node
    
    
};
