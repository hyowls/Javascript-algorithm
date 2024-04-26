function solution(n) {
    let result = 0
    let even = []
    for(let i=0; i < n; i++){
        if(n % i === 0) {
            even.push(i)
        }
    }
    even.push(n)
    for(let i=0; i<even.length;i++){
        result += even[i]
    }
    return result
}