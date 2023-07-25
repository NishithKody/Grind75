/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(n, prerequisites) {
    let graph = {}
    let res = []

    for(let i=0; i<n; i++){
        graph[i]=[]
    }

    for(let pre of prerequisites){
        let first = pre[0]
        let second = pre[1]

        if(!graph[first]){
            graph[first] = []
        }
        graph[first].push(second)
    }

    // console.log('graph',graph)

    let visit = new Set()

    let util =(node,cycle)=>{

        if(visit.has(node))
            return true

        if(cycle.has(node))
            return false
        
        cycle.add(node)
        res.push(node)
        
        for(let n of graph[node]){

            let res =  util(n,cycle)
            if(res == false)
                return false
        }
        cycle.delete(node)
        return true

    }

    for(let i=0; i<n; i++){
        let cycle = new Set()
        let res = util(i,cycle)
        if(res==false)
            return false
        visit.add(i)
    }


    return true;

};
