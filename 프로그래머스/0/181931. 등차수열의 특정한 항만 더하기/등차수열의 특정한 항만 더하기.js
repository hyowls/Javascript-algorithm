function solution(a, d, included) {
    let res = {}
    let res1 = 0
    for(let i=0; i<included.length; i++){
        res.num = a + (i*d)
        res.isTrue = included[i]
        if (res['isTrue'] == true){
            res1 += res['num']
        }
    }
    return res1
}