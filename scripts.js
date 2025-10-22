let elementos = [
    { elemento: "Vida", href: "#vida", descripcion: "Fotos de la vida de Xosé Manuel Pazos Varela" },
    { elemento: "Obra", href: "#obra", descripcion: "Fotos de la obra de Xosé Manuel Pazos Varela" },
    { elemento: "Política", href: "#politica", descripcion: "Fotos de la política de Xosé Manuel Pazos Varela" },
    { elemento: "Actividades", href: "#actividades", descripcion: "Fotos de las actividades de Xosé Manuel Pazos Varela" },
    { elemento: "Fotografías", href: "#fotografias", descripcion: "Fotos de Xosé Manuel Pazos Varela" },
    { elemento: "Contacto", href: "#contacto", descripcion: "Datos de contacto de Xosé Manuel Pazos Varela" }
];

function buscarElemento() {
    let busqueda = document.getElementById("busqueda").value.toLowerCase();
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    elementos.forEach(({ elemento, href, descripcion }) => {
        if (elemento.toLowerCase().includes(busqueda) || descripcion.toLowerCase().includes(busqueda)) {
            let div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `
                <div class="elemento">${elemento}</div> 
                <div>Descripción: ${descripcion}</div>
            `;

            // Si hay un href, al hacer clic se desplazará a esa sección
            if (href) {
                div.onclick = function () {
                    let section = document.querySelector(href);
                    if (section) {
                        section.scrollIntoView({ behavior: "smooth", block: "start" });
                        section.classList.add("highlight");
                        setTimeout(() => section.classList.remove("highlight"), 2000);
                    }
                };
            }

            lista.appendChild(div);
        }
    });
}


