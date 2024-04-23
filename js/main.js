
function fn_abrirConversaWhatsApp() {
    var input = document.getElementById("txtNumero").value;
    var texto = document.getElementById("txtTexto").value;
    window.open("https://api.whatsapp.com/send?phone=" + input + "&text=" + texto);
}
function fn_abrirConversaWhatsAppWeb() {
    var input = document.getElementById("txtNumero").value;
    var texto = document.getElementById("txtTexto").value;
    window.open("https://web.whatsapp.com/send?phone=" + input + "&text=" + texto);
}
