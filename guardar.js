let boton = document.getElementById("button");
let namesInput = document.getElementById("names");
let lastnamesInput = document.getElementById("lastnames");
let tableBody = document.getElementById("tableBody");
let correoInput = document.getElementById("correo");


let id = 1;

boton.addEventListener("click", function () {
    let nombre = namesInput.value.trim();
    let apellido = lastnamesInput.value.trim();
    let correo = correoInput.value.trim();

    if (nombre !== "" && apellido !== "" && correo !== "") {

        // Validación visual
        namesInput.classList.add("is-valid");
        namesInput.classList.remove("is-invalid");
        lastnamesInput.classList.add("is-valid");
        lastnamesInput.classList.remove("is-invalid");
        correoInput.classList.add("is-valid");
        correoInput.classList.remove("is-invalid");
        Swal.fire("Perfecto", "Completaste todos los campos", "success");

        // Crear fila
        let fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${id}</td>
            <td>${nombre}</td>
            <td>${apellido}</td>
            <td>${correo}</td>
            
        <td>
            <button class="btn btn-info btn-sm ver">Ver</button>
            <button class="btn btn-warning btn-sm editar">Editar</button>
            <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
        </td>

             `;
        namesInput.classList.remove('is-valid')
        lastnamesInput.classList.remove('is-valid')
        correoInput.classList.remove('is-valid')

        tableBody.appendChild(fila);

        id++;


         // ================== ACCIÓN VER ==================
        fila.querySelector(".ver").addEventListener("click", function () {
            Swal.fire({
                title: "Información del usuario",
                html: `
                    <strong>Nombre:</strong> ${fila.children[1].textContent}<br>
                    <strong>Apellido:</strong> ${fila.children[2].textContent}<br>
                    <strong>Correo:</strong> ${fila.children[3].textContent}
                `,
                icon: "info"
            });
        });


    // ================== ACCIÓN EDITAR ==================
        fila.querySelector(".editar").addEventListener("click", function () {
            namesInput.value = fila.children[1].textContent;
            lastnamesInput.value = fila.children[2].textContent;
            correoInput.value = fila.children[3].textContent;

            fila.remove();
            id--;
            

            Swal.fire("Editar", "Modifica los datos y presiona Guardar", "info");
        });


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

        // Limpiar inputs
        namesInput.value = "";
        lastnamesInput.value = "";
        correoInput.value = "";

    } else {

        namesInput.classList.add("is-invalid");
        namesInput.classList.remove("is-valid");
        lastnamesInput.classList.add("is-invalid");
        lastnamesInput.classList.remove("is-valid");
        correoInput.classList.add("is-invalid");
        correoInput.classList.remove("is-valid");


        Swal.fire("Error", "Completa todos los campos", "error");
    }
});
