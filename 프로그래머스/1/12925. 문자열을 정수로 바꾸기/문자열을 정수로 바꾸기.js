function solution(s) {
    if(typeof s === 'string'){
        return Number(s)
    } else if(typeof s === 'number'){
        return String(s)
    }
}