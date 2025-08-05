
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question("Qual é a sua linguagem preferida? ", (language) => {
    if (language === 'Python') {
        console.log('Isso é nem Linguagem')
    } else {
        console.log(`A minha linguagem preferida é : ${language}`)
    }
    readline.close();
});
