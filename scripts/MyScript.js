var modicar = (listadoRegistrosNuevo)=>{
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eCorreo = document.getElementById("correo");
    let eTelefono = document.getElementById("telefono");
    let eDireccion = document.getElementById("direccion");
    let eEdad = document.getElementById("edad");
    let eDate = document.getElementById("date");
    let eSuscripcion = document.getElementById("suscripcion");
    let eBtnEditarUp = document.getElementById("btnEditarUp");

    let nombre = eNombre.value;
    let apellido = eApellido.value;
    let correo = eCorreo.value;
    let telefono = eTelefono.value;
    let direccion = eDireccion.value;
    let edad = parseInt(eEdad.value);
    let date = eDate.value;
    let suscripcion = eSuscripcion.checked;
    let indice = eBtnEditarUp.value;
    listadoRegistrosNuevo[indice].nombre = nombre;
    listadoRegistrosNuevo[indice].apellido = apellido;
    listadoRegistrosNuevo[indice].correo = correo;
    listadoRegistrosNuevo[indice].telefono = telefono;
    listadoRegistrosNuevo[indice].direccion = direccion
    listadoRegistrosNuevo[indice].edad = edad;
    listadoRegistrosNuevo[indice].date = date;
    listadoRegistrosNuevo[indice].suscripcion = suscripcion;
    localStorage.setItem('registros',JSON.stringify(listadoRegistrosNuevo));
    cargarTabla(listadoRegistrosNuevo)
}

var cargarTabla = (listadoRegistrosNuevo)=>{
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");

    render = "<table>"
    render += "<tr><th>Nombre</th><th>Apellido</th><th>Correo</th><th>telefono</th><th>Direccion</th><th>Edad</th><th>Fecha</th><th>Suscripcion</th></tr>"
    for (let i = 0; i < listadoRegistrosNuevo.length; i++) {
        const element = listadoRegistrosNuevo[i];
        render += "<tr>";
        render += "<td>"+element.nombre+"</td>";
        render += "<td>"+element.apellido+"</td>";
        render += "<td>"+element.correo+"</td>";
        render += "<td>"+element.telefono+"</td>";
        render += "<td>"+element.direccion+"</td>";
        render += "<td>"+element.edad+"</td>";
        render += "<td>"+element.fecha+"</td>";
        render += "<td>"+element.suscripcion+"</td>";
        render += "<td>";
        render += "<button id='btnEditar"+i+"'>Editar</button>";
        render += "<button id='btnEliminar"+i+"'>Eliminar</button>";
        render += "</td>";
        render += "</tr>";
    }
    render += "</table>";
    eContenedorTabla.innerHTML = render;
     for (let i = 0; i < listadoRegistrosNuevo.length; i++) {
        var eBtn = document.getElementById("btnEditar"+i);
        var eBtn2 = document.getElementById("btnEliminar"+i);
        let element = listadoRegistrosNuevo[i]
        eBtn.addEventListener("click",()=>{
            eNombre = element.nombre;
            eApellido = element.apellido;
            eCorreo = element.correo;
            eTelefono = element.telefono;
            eDireccion = element.direccion;
            eEdad = element.edad;
            eDate = element.date;
            eSuscripcion = element.suscripcion;
            let sEditar = "<button type='button' id='btnEditar' value='"+i+"'>Editar</button>";
            let contenedorBoton = document.getElementById("contenedorBtnExtra");
            contenedorBoton.innerHTML = sEditar;
            let eBtnEditarUp = document.getElementById("btnEditar");
            eBtnEditarUp.addEventListener("click",()=>modicar(listadoRegistrosNuevo));
        })   
    }
}

var registra = ()=> {
    
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
    let suscripcion = eSuscripcion.checked;              

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

    let registros = {"nombre":nombre,"apellido":apellido,"correo":correo,"telefono":telefono,"direccion":direccion,"edad":edad,"fecha":date,"suscripcion":suscripcion};
    let listadoRegistros =  localStorage.getItem("registros");
    let listadoRegistrosAntiguo = JSON.parse(listadoRegistros);
    if (listadoRegistrosAntiguo==null){
        listadoRegistrosNuevo = [registros]
    }else{
        listadoRegistrosNuevo = [...listadoRegistrosAntiguo,registros]
    }

    console.log(registros);
    console.log(listadoRegistrosAntiguo);
    console.log(listadoRegistrosNuevo);
    localStorage.setItem('registros',JSON.stringify(listadoRegistrosNuevo));
    
    cargarTabla(listadoRegistrosNuevo);
}



document.getElementById("btn").addEventListener("click",registra)