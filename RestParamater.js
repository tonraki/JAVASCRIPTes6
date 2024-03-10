summation = (...numberARR)=>{
    let total = 0
    for(let number of numberARR) total += number
    return total
}

console.log(summation(10,20,30,40))
console.log(summation(100,200,300,300,3000))