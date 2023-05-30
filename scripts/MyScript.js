let registra = ()=> {
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eCorreo = document.getElementById("correo");
    let eTelefono = document.getElementById("telefono");
    let eDireccion = document.getElementById("direccion");
    let eEdad = document.getElementById("edad");
    let eDate = document.getElementById("date");
    let eSuscripcion = document.getElementById("suscripcion");

    let nombre = eNombre.value;
    let apellido = eApellido.value;
    let correo = eCorreo.value;
    let telefono = eTelefono.value;
    let direccion = eDireccion.value;
    let edad = parseInt(eEdad.value);
    let date = eDate.value;
    let suscripcion = eSuscripcion.value;              

    const registro = [];
    registro[0] = nombre;
    registro[1] = apellido;
    registro[2] = correo;
    registro[3] = telefono;
    registro[4] = direccion;
    registro[5] = edad;
    registro[6] = date;
    registro[7] = suscripcion;
    console.log(registro);
}


document.getElementById("btn").addEventListener("click",registra)