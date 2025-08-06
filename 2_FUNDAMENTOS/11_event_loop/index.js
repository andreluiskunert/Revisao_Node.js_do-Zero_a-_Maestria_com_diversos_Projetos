function a() {
    console.log("Executando a()")
}
function b() {
    console.log("Executando b()")
}
function c() {
    console.log("Executando c()") // garanter que codigos seja sequencial
    a()
    b()
}

c()
