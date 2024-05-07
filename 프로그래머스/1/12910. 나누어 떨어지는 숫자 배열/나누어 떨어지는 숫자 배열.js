function solution(arr, divisor) {
    let result = []
    arr.map((data)=>{
        if(data % divisor === 0) result.push(data)
    })
    if (result.length === 0) result.push(-1)
    return result.sort((a, b) => a - b)
}