let boton = document.getElementById("button");
let namesInput = document.getElementById("names");
let lastnamesInput = document.getElementById("lastnames");
let tableBody = document.getElementById("tableBody");

let id = 1;

boton.addEventListener("click", function () {
    let nombre = namesInput.value.trim();
    let apellido = lastnamesInput.value.trim();

    if (nombre !== "" && apellido !== "") {

        // Crear fila
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>
                <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
            </td>
        `;

        tableBody.appendChild(fila);

        id++;

        // Botón eliminar
        fila.querySelector(".eliminar").addEventListener("click", function () {
            Swal.fire({
                title: "¿Estás seguro?",
                text: "Este usuario será eliminado",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "Cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    fila.remove();
                    Swal.fire("Eliminado", "El usuario fue eliminado", "success");
                }
            });
        });

        // Validación visual
        namesInput.classList.add("is-valid");
        namesInput.classList.remove("is-invalid");
        lastnamesInput.classList.add("is-valid");
        lastnamesInput.classList.remove("is-invalid");

        // Limpiar inputs
        namesInput.value = "";
        lastnamesInput.value = "";

    } else {

        namesInput.classList.add("is-invalid");
        namesInput.classList.remove("is-valid");
        lastnamesInput.classList.add("is-invalid");
        lastnamesInput.classList.remove("is-valid");

        Swal.fire("Error", "Completa todos los campos", "error");
    }
});
