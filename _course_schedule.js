/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    let adj = {}

    for(let i=0; i<numCourses; i++){
        adj[i]=[]
    }

    for(let crs of prerequisites){
        let main = crs[0]
        let pre = crs[1]
        adj[main].push(pre)
    }
    
    let visit = new Set()
    let cycle = new Set()

    let dfs = (i)=>{

        if(cycle.has(i))
            return false
        
        if(visit.has(i)){
            visit.add(i)
            return true
        }

        cycle.add(i)
        for(let nei of adj[i]){
            if(dfs(nei)==false)
                return false
        }
        cycle.delete(i)
        visit.add(i)

        return true

    }

    for(let i=0; i<numCourses; i++){
        if(dfs(i)==false)
            return false
    }

    return true
    
};
