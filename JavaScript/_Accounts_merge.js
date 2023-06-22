/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    
    // [j_sm] = [j_ny, j_00]
    // [j_ny] = [j_sw, ]
    // [j_00] = [j_sw]

    let email_to_name = new Map()
    let graph = {}
    let visit = new Set()
    let res = []

    for(let account of accounts){
        let name = account[0]

        if(!email_to_name.has(account[1])){
            email_to_name.set(account[1],name)
        }

        if(!graph[account[1]]){
            graph[account[1]]= []
            graph[account[1]].push(account[1])
        }

        for(let i=2; i<account.length; i++){
            let newAcc = account[i]

            graph[account[1]].push(newAcc)

            if(!graph[newAcc]){
                graph[newAcc]= []
            }

            graph[newAcc].push(account[1])
            
        }
    }

    // console.log('graph',graph)
    let cur = []

    let dfs=(email)=>{
        if(visit.has(email))
            return
        
        visit.add(email)
        cur.push(email)

        for(let nei of graph[email]){
            dfs(nei)
        }
        
    }

    for(let [email,name] of email_to_name.entries()){
        
        dfs(email)
        if(cur.length>0){
            cur.sort()
            cur.unshift(name)
            res.push(cur)
        }
        cur=[]

    }

    return res
};
