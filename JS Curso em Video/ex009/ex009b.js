var agora = new Date()
var hora = agora.getHours()
console.log(`São ${hora} horas`)
if (hora < 12 && hora > 6) {
    console.log('Bom dia')
} else if (hora <= 18 && hora >= 12) {
    console.log('Boa tarde')
} else if (hora >= 19 && hora <= 24) {
     console.log('Boa noite')
} else {
    console.log('Boa madrugada')
}