function encriptar() {
  let texto = document.getElementById("mensaje").value.toLowerCase();
  var texto_cifrado = texto.replace(/e/igm, "enter");
  var texto_cifrado = texto_cifrado.replace(/o/igm, "ober");
  var texto_cifrado = texto_cifrado.replace(/i/igm, "imes");
  var texto_cifrado = texto_cifrado.replace(/a/igm, "ai");
  var texto_cifrado = texto_cifrado.replace(/u/igm, "ufat");
  document.getElementById("encriptado").innerHTML = texto_cifrado;
}

function desencriptar() {
  let texto = document.getElementById("mensaje").value.toLowerCase();
  var texto_cifrado = texto.replace(/enter/igm, "e");
  var texto_cifrado = texto_cifrado.replace(/ober/igm, "o");
  var texto_cifrado = texto_cifrado.replace(/imes/igm, "i");
  var texto_cifrado = texto_cifrado.replace(/ai/igm, "a");
  var texto_cifrado = texto_cifrado.replace(/ufat/igm, "u");
  document.getElementById("encriptado").innerHTML = texto_cifrado;
}

document.getElementById("copiar").addEventListener("click", function copiar(){
  var contenido = document.getElementById("encriptado");
  contenido.select();
  document.execCommand("copy");
});   

var area_texto = document.getElementById("mensaje");
var botonBorrar = document.getElementById("copiar");

botonBorrar.addEventListener("click", function() {
  area_texto.value = ""; 
  var tiempoBorrado = "mensaje";
  setTimeout(function encriptar() {
    area_texto.value = "";
  }, tiempoBorrado);
});

document.getElementById('pegar').addEventListener('click', function pegar() {
  var textareaDestino = document.getElementById('mensaje');
  textareaDestino.focus();
  document.execCommand('paste');
});
