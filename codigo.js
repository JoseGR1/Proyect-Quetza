
function downloadFile() {
    // Crear un enlace temporal para descargar el archivo
    var link = document.createElement("a");
    link.href = "apks/Quetza.apk";
    link.download = "Quetza.apk";
  
    // Hacer clic en el enlace para descargar el archivo
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  function irAFormulario() {
    window.location.href = "email_form.html";
  }
  function whatsapp() {
    window.location.href = "whatsapp_chat.html";
  }