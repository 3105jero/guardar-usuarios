let boton = document.getElementById("button");
let namesInput = document.getElementById("names");
let lastnamesInput = document.getElementById("lastnames");
let correoInput = document.getElementById("correo");
let tableBody = document.getElementById("tableBody");

// ================== DATOS ==================
let usuarios = [];
let id = 1;
let filaEditando = null;

// ================== GUARDAR ==================
boton.addEventListener("click", function () {
    let nombre = namesInput.value.trim();
    let apellido = lastnamesInput.value.trim();
    let correo = correoInput.value.trim();

    if (nombre === "" || apellido === "" || correo === "") {
        Swal.fire("Error", "Completa todos los campos", "error");
        return;
    }

    // ================== EDITAR ==================
    if (filaEditando) {
        let idEditando = Number(filaEditando.children[0].textContent);

        let usuario = usuarios.find(u => u.id === idEditando);
        usuario.nombre = nombre;
        usuario.apellido = apellido;
        usuario.correo = correo;

        filaEditando.children[1].textContent = nombre;
        filaEditando.children[2].textContent = apellido;
        filaEditando.children[3].textContent = correo;

        filaEditando = null;

        Swal.fire("Actualizado", "Usuario editado correctamente", "success");
    } 
    // ================== NUEVO ==================
    else {
        let usuario = {
            id: id,
            nombre: nombre,
            apellido: apellido,
            correo: correo
        };

        usuarios.push(usuario);

        let fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${usuario.id}</td>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellido}</td>
            <td>${usuario.correo}</td>
            <td>
                <button class="btn btn-info btn-sm ver">Ver</button>
                <button class="btn btn-warning btn-sm editar">Editar</button>
                <button class="btn btn-danger btn-sm eliminar">Eliminar</button>
            </td>
        `;

        // VER
        fila.querySelector(".ver").addEventListener("click", () => {
            Swal.fire({
                title: "Información",
                html: `
                    <b>Nombre:</b> ${usuario.nombre}<br>
                    <b>Apellido:</b> ${usuario.apellido}<br>
                    <b>Correo:</b> ${usuario.correo}
                `,
                icon: "info"
            });
        });

        // EDITAR
        fila.querySelector(".editar").addEventListener("click", () => {
            filaEditando = fila;
            namesInput.value = usuario.nombre;
            lastnamesInput.value = usuario.apellido;
            correoInput.value = usuario.correo;
        });

        // ELIMINAR
        fila.querySelector(".eliminar").addEventListener("click", () => {
            Swal.fire({
                title: "¿Eliminar?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonText: "Sí",
                cancelButtonText: "No"
            }).then(result => {
                if (result.isConfirmed) {
                    usuarios = usuarios.filter(u => u.id !== usuario.id);
                    fila.remove();
                    console.log(usuarios);
                }
            });
        });

        tableBody.appendChild(fila);
        id++;
    }

    console.log(usuarios);

    // LIMPIAR
    namesInput.value = "";
    lastnamesInput.value = "";
    correoInput.value = "";
});
