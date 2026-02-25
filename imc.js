let peso = prompt("Digite o seu peso");
let altura = prompt("Digite sua altura");
let imc = peso / (altura ** 2);

document.write("<h2>Peso: " + peso + "</h2>");
document.write("<h2>Altura: " + altura + "</h2>");
document.write("<h2>IMC: " + imc + "</h2>")

if (imc < 17) {
    document.write("<h1>Muito abaixo do peso</h1>");

} else if (imc > 17 && imc < 18.48) {
    document.write("<h1>Abaixo do peso</h1>");

} else if (imc >= 18.5 && imc <= 24.99) {
    document.write("<h1>Peso normal</h1>");

} else if (imc >= 25 && imc <= 29.99) {
    document.write("<h1>Acima do peso</h1>");
    
} else if (imc >= 30 && imc <= 34.99) {
    document.write("<h1>Obesidade I</h1>")
} else {
    document.write("<h1>Obesidade II</h1>");
}