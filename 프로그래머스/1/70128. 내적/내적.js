function solution(a, b) {
    let result = 0;
    return a.reduce((acc, cur, idx)=> acc += cur * b[idx],0)
}