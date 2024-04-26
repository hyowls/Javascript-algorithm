function solution(n)
{   
    let res = 0
    for(let i=0; i<String(n).length;i++){
        res += Number(String(n)[i])
    }
    return res
}