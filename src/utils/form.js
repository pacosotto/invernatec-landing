document.addEventListener("DOMContentLoaded", () => {
  const nombre = document.querySelector("#nombre");
  const email = document.querySelector("#email");
  const telefono = document.querySelector("#telefono");
  const mensaje = document.querySelector("#mensaje");

  const formulario = document
    .querySelector("#formulario")
    .addEventListener("submit", (e) => {
      e.preventDefault();

      if (
        [nombre.value, email.value, telefono.value, mensaje.value].includes("")
      ) {
        mostrarAlerta("Debes rellenar todos los campos", true);
        return;
      }

      mostrarAlerta("¡Mensaje enviado con exito!");
    });
});

function mostrarAlerta(mensaje, error) {
  const existeAlerta = document.querySelector(".alertaSola");
  if (!existeAlerta) {
    const alerta = document.createElement("div");
    alerta.classList.add("alertaSola");
    alerta.textContent = mensaje;
    if (error) {
      alerta.classList.add("bg-red-600", "font-bold", "rounded-lg", "p-2");
    }
    alerta.classList.add("bg-lime-500", "font-bold", "rounded-lg", "p-2");
    formulario.appendChild(alerta);
    formulario.reset();

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
  return;
}
