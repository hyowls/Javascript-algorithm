function solution(a, b) {
    let a_res = String(a) + String(b)
    let b_res = String(b) + String(a)
    return a_res >= b_res ? Number(a_res) : Number(b_res)
}