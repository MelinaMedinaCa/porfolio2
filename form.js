emailjs.init("xTMp9E14UrFGtT-sx");

const form = document.getElementById("contacto");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_kjn19fg", "template_ny1wly5", this)
    .then(() => {
        alert("MENSAJE ENVIADO CON EXITO.");
        form.requestFullscreen();
    })
    .catch((error) => {
        console.error("Error al enviar:", error);
        alert("Ocurrio un error al enviar. Intentelo más Tarde.");
    });
});
