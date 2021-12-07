var num = [2,5,6,9,6,8]

/*
for (var pos = 0; pos < num.length; pos++) {
    console.log(`a posição ${pos} tem o valor ${num[pos]}`)
}
*/

for (var pos in num){
    console.log(num[pos])
}