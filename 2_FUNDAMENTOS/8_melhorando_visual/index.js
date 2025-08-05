const chalk = require('chalk')
console.log("Nota Escolares")
const nota = 5
 if(nota >= 7) {
    console.log(chalk.green('Parabéns!Você foi aprovado!!!'))
 } else {
    console.log(chalk.bgRed.black('Você precisa fazer a prova de recuperação'))
 }
