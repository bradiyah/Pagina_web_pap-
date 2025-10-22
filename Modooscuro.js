if (!localStorage.getItem("modoOscuro")) {
    localStorage.setItem("modoOscuro", "false");
}

function activarModoOscuro() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    localStorage.setItem("modoOscuro", "true");
}

function desactivarModoOscuro() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    localStorage.setItem("modoOscuro", "false");
}

// Aplicar configuración guardada al cargar la página
if (localStorage.getItem("modoOscuro") === "true") {
    activarModoOscuro();
}