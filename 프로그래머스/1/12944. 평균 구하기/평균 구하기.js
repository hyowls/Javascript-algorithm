function solution(arr) {
    let result = 0
    for (let i=0; i<arr.length;i++){
        result += Number(arr[i].toString())
    }
    return result / arr.length
}