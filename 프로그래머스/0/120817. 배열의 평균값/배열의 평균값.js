function solution(numbers) {
    var answer = 0;
    let result = 0;
    for(let i=0; i <numbers.length; i++){
        answer += numbers[i]
        result = answer / numbers.length
    }
    return result
}