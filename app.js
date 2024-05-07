function calcularIMC() {
    var resultado = '';

    for (let i = 1; i <= 5; i++) {
        let altura = parseFloat(window.prompt("Insira a altura em centímetros da pessoa " + i));
        let peso = parseFloat(window.prompt("Insira o peso em quilogramas da pessoa " + i));

        if (!altura || !peso) {
            alert("Insira as 5 pessoas respectivas.");
            return;
        }

        let imc = (peso*10000) / (altura * altura);

        let imcCorporal;
        if (imc < 18.5) {
            imcCorporal = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 25) {
            imcCorporal = "Peso normal";
        } else if (imc >= 25 && imc < 30) {
            imcCorporal = "Sobrepeso";
        } else {
            imcCorporal = "Obeso";
        }

        resultado += "<p>Pessoa " + i + ": IMC " + imc.toFixed(2) + " - " + imcCorporal + "</p>";
    }

    document.getElementById("resultado").innerHTML = resultado;
}
