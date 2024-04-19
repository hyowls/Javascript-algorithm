function solution(num_list) {
    let res = 0
    let res2 = 0
    if(num_list[num_list.length -2] < num_list[num_list.length -1]) {
        res += num_list[num_list.length -1] - num_list[num_list.length -2]
        num_list.push(res)
    } else {
        res2 += num_list[num_list.length -1] * 2
        num_list.push(res2)
    }
    return num_list
}