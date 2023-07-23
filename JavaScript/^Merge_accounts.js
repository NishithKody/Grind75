/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {

    let graph = {}
    let map = {}

    for(let acc of accounts){
        let name = acc[0]
        let email = acc[1]
        map[email] = name

        if(!graph[email]){
            graph[email] = []
        }

        for(let i=2; i<acc.length; i++){
            graph[email].push(acc[i])

            if(!graph[acc[i]]){
                graph[acc[i]] = []
            }
            graph[acc[i]].push(email)
        }
    }
    // console.log('initial graph',graph)

    let res = []
    let cur = []
    let visit = new Set()

    let dfs=(email)=>{
        if(visit.has(email))
            return 
        visit.add(email)
        cur.push(email)

        for(let val of graph[email]){
            dfs(val)
        }

    }

    for(let [key,val] of Object.entries(graph)){
        // console.log('key',key)
        dfs(key)
        res.push(cur)
        cur=[]
    }

    let final = []
    for(let val of res){
        if(val.length==0)
            continue
        
        let name = map[val[0]]
        let temp = []
        
        for(let i of val){
            temp.push(i)
        }
        temp.sort()
        temp.unshift(name)
        final.push(temp)
        
    }

    console.log('res',res)
    return final
    
};
