function solution(strArr) {
    return strArr.map((str,i) => {
        return i % 2 === 0 ? str.toLowerCase() : str.toUpperCase()
    })
}