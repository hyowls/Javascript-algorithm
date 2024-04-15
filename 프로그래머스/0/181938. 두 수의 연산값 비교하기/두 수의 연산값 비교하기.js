function solution(a, b) {
    let res_a = String(a) + String(b) // 291
    let res_b = 2 * a * b //364
    return res_a >= res_b ? Number(res_a) : Number(res_b)
}