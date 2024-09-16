
function enviar() {
    let numero = document.getElementById('number').value;

    localStorage.setItem("número", numero);

    alert("Número armazenado foi: " + numero)
    
}