function solution(arr) {
    let result = []
    if(arr.length === 1) {
        return [-1]
    } else {
        arr.splice(arr.indexOf(Math.min(...arr)),1)
        result = arr
    }
    return result
}