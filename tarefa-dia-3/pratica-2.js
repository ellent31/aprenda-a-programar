/* 


1 x 1 = 1
1 x 2 = 2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
1 x 6 = 6
*/

let multiplicador = 10
let n = 10 //multiplicar de 1 a n 
let i = 1

while(i <= n) {
  let resultado = multiplicador * i
  let textoDeExibicao = `${multiplicador} x ${i} = ${resultado}`
  console.log(textoDeExibicao)
  i++
}