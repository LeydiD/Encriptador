const txtEntrada = document.querySelector(".txt-entrada");
const txtSalida = document.querySelector(".txt-salida");
const btnCopiar = document.querySelector(".btn-copiar");
const noMensaje = document.querySelector(".noMensaje");

function validarTexto(texto) {
    const regex = /[ÁÉÍÓÚÑáéíóúñ]|[^a-z\s]/; // Regex para detectar mayúsculas y acentos
    return regex.test(texto);
}
function copiar() {
    navigator.clipboard.writeText(txtSalida.value);
}

function btnEncriptar() {
    const txtEncriptado = encriptar(txtEntrada.value);
    txtSalida.style.backgroundImage = 'none';
    if (validarTexto(txtEntrada.value)) {
        alert("No deben ser utilizados letras mayúsculas, con acentos ni caracteres especiales.");
        txtEntrada.value = "";
        alertar();
    } else if (txtEntrada.value.trim() === "") {
        alertar();
    } else {
        txtEntrada.value = "";
        noMensaje.style.visibility = "hidden";
        txtSalida.value = txtEncriptado;
        btnCopiar.hidden = false;
    }

}

function btnDesencriptar() {
    const txtDesencriptado = desencriptar(txtEntrada.value);
    txtSalida.style.backgroundImage = 'none';
    if (validarTexto(txtEntrada.value)) {
        alert("No deben ser utilizados letras con acentos ni caracteres especiales.");
        txtEntrada.value = "";
        alertar();
    } else if (txtEntrada.value.trim() === "") {
        alertar();
    } else {
        txtEntrada.value = "";
        noMensaje.style.visibility = "hidden";
        txtSalida.value = txtDesencriptado;
        btnCopiar.hidden = false;

    }
}

function alertar() {
    txtSalida.value = "";
    txtSalida.style.backgroundImage = "url('/imagenes/Muñeco.png')";
    noMensaje.style.visibility = "visible";
    btnCopiar.hidden=true;
}


function encriptar(mensajeEncriptado) {
    let reglas = [["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]];
    mensajeEncriptado = mensajeEncriptado.toLowerCase();

    for (let i = 0; i < reglas.length; i++) {
        if (mensajeEncriptado.includes(reglas[i][0])) {
            mensajeEncriptado = mensajeEncriptado.replaceAll(reglas[i][0], reglas[i][1])
        }
    }
    return mensajeEncriptado;
}


function desencriptar(mensajeDesencriptado) {
    let reglas = [["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]];
    mensajeDesencriptado = mensajeDesencriptado.toLowerCase();

    for (let i = 0; i < reglas.length; i++) {
        if (mensajeDesencriptado.includes(reglas[i][1])) {
            mensajeDesencriptado = mensajeDesencriptado.replaceAll(reglas[i][1], reglas[i][0])
        }
    }

    return mensajeDesencriptado;
}
