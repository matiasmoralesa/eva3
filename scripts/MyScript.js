let registra = ()=> {
    let eNombre = document.getElementById("nombre");
    let eDate = document.getElementById("date");
    let eTime = document.getElementById("time");
    let eCorreo = document.getElementById("correo");
    let ePassword = document.getElementById("password");
    let eTelefono = document.getElementById("telefono");

    let nombre = eNombre.value;
    let date = eDate.value;
    let time = eTime.value;
    let correo = eCorreo.value;
    let password = ePassword.value;
    let telefono = eTelefono.value;

    const registro = [];
    registro[0] = nombre;
    registro[1] = date;
    registro[2] = time;
    registro[3] = correo;
    registro[4] = password;
    registro[5] = telefono;
    console.log(registro);
}


document.getElementById("btn").addEventListener("click",registra)