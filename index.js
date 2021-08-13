// Code your solutions in this file

function writeCards(names, occasion) {
    let res = []
    for(let i = 0; i < names.length; i++){
        res.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
    }
    return res
}

function countDown(num){
    while (num >= 0){
        console.log(num)
        num--
    }
}
