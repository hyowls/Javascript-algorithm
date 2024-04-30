function solution(n) {
    let result = []
    let str = String(n)
    for (let i =0; i <str.length; i++){
        result.push(str[i])
    }
    result.sort((a,b) =>(b-a))
    return (parseInt(result.join("")))
}