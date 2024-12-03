function validarFormulario() {
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);
    
    if (campoB > campoA) {
        alert("Formulário válido! O número B é maior que o número A.");
    } else {
        alert("Formulário inválido! O número B deve ser maior que o número A.");
    }
}