function solution(n) {
    let answer = 0
    for(let i =0; i <= n; i++){
        (i % 2 === 0) ? answer += i : 0
    }
    return answer
}