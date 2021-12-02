var agora = new Date()
var diaSem = agora.getDay()

/*
0 = Domingo
1 = Segunda 
2 = Terca
3 = Quarta
4 = Quinta
5 = Sexta
6 = Sabado
*/

switch(diaSem) {
    case 0: 
        console.log('Domingo')
        break
    case 2:
        console.log('Terça')
        break
    case 4:
        console.log('Quinta')
        break
    default:
        console.log('inválido')
        break

}