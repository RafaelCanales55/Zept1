document.addEventListener("DOMContentLoaded", async () => {

    const contenedor = document.getElementById("navbar-container");

    if (!contenedor) return;

    try {

        const respuesta = await fetch("./public/components/Menu.html");

        if (!respuesta.ok) {
            throw new Error("No se pudo cargar el menú");
        }

        const html = await respuesta.text();

        contenedor.innerHTML = html;

    } catch (error) {
        console.error("Error al cargar el menú:", error);
    }

});