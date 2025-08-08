const path = require('path')
// path absoluto:
console.log(path.resolve("amorIlusao.txt"))
// forma path
const midFolder = "relatorios"
const fileName = "Andre.txt"
const finalPath = path.join("/", 'arquivos', midFolder, fileName )
console.log(finalPath)