let boton = document.getElementById("button");

boton.addEventListener("click", function () {
    let nombre = document.getElementById("names").value;
    let lastname = document.getElementById("lastnames").value;

    if (nombre != "" && lastname != "") {
        console.log(nombre)
        console.log(lastname)
        names.classList.add('is-valid')
        names.classList.remove('is-invalid')
        lastnames.classList.add('is-valid')
        lastnames.classList.remove('is-invalid')
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });

        
    } else {
        console.log('error')
        names.classList.add('is-invalid')
        names.classList.remove('is-valid')
        lastnames.classList.add('is-invalid')
        lastnames.classList.remove('is-valid')
        Swal.fire({
            title: "So Bad",
            text: "You clicked the button!",
            icon: "error"
        });
        
    }
});
