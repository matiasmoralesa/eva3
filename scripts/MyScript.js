var modificar = (listadoRegistrosNuevo)=>{
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eCorreo = document.getElementById("correo");
    let eTelefono = document.getElementById("telefono");
    let eDireccion = document.getElementById("direccion");
    let eEdad = document.getElementById("edad");
    let eDate = document.getElementById("date");
    let eSuscripcion = document.getElementById("suscripcion");
    let eBtnEditarUp = document.getElementById("btnEditar");

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

var eliminar = (listadoRegistrosNuevo)=>{
    let eBtnEliminarUp = document.getElementById("btnEliminar");
    let indice = eBtnEliminarUp.value;
    console.log(listadoRegistrosNuevo)
    lista = listadoRegistrosNuevo.filter((p)=>p.id!=indice)
    lista = lista.map((p,index)=>{return{...p,"id":index}})
    console.log(lista)
    localStorage.setItem("registros",JSON.stringify(lista));
    cargarTabla(lista) 
}



var cargarTabla = (listadoRegistrosNuevo)=>{
    let eContenedorTabla = document.getElementById("contenedorTabla");
    let eNombre = document.getElementById("nombre");
    let eApellido = document.getElementById("apellido");
    let eCorreo = document.getElementById("correo");
    let eTelefono = document.getElementById("telefono");
    let eDireccion = document.getElementById("direccion");
    let eEdad = document.getElementById("edad");
    let eDate = document.getElementById("date");
    let eSuscripcion = document.getElementById("suscripcion");

    render = "<table>"
    render += "<tr><th>Nombre</th><th>Apellido</th><th>Correo</th><th>telefono</th><th>Direccion</th><th>Edad</th><th>Date</th><th>Suscripcion</th></tr>"
    for (let i = 0; i < listadoRegistrosNuevo.length; i++){
        const element = listadoRegistrosNuevo[i];
        render += "<tr>";
        render += "<td>"+element.nombre+"</td>";
        render += "<td>"+element.apellido+"</td>";
        render += "<td>"+element.correo+"</td>";
        render += "<td>"+element.telefono+"</td>";
        render += "<td>"+element.direccion+"</td>";
        render += "<td>"+element.edad+"</td>";
        render += "<td>"+element.date+"</td>";
        render += "<td>"+element.suscripcion+"</td>";
        render += "<td>";
        render += "<button type='button' class='btn waves-effect waves-light' id='btnEditar"+i+"'>Editar</button>";
        render += "<button type='button' class='btn waves-effect waves-light' id='btnEliminar"+i+"'>Eliminar</button>";
        render += "</td>";
        render += "</tr>";
    }
    render += "</table>";
    eContenedorTabla.innerHTML = render;
     for (let i = 0; i < listadoRegistrosNuevo.length; i++){
        var eBtn = document.getElementById("btnEditar"+i);
        var eBtn2 = document.getElementById("btnEliminar"+i);
        let element = listadoRegistrosNuevo[i]
        eBtn.addEventListener("click",()=>{
            eNombre.value = element.nombre;
            eApellido.value = element.apellido;
            eCorreo.value = element.correo;
            eTelefono.value = element.telefono;
            eDireccion.value = element.direccion;
            eEdad.value = element.edad;
            eDate.value = element.date;
            eSuscripcion.value = element.suscripcion;
            let sEditar = "<button type='button'class='btn waves-effect waves-light' id='btnEditar' value='"+i+"'>Editar</button>";
            
            let contenedorBoton = document.getElementById("contenedorBtnExtra");
            contenedorBoton.innerHTML = sEditar;
            let eBtnEditarUp = document.getElementById("btnEditar");
            eBtnEditarUp.addEventListener("click",()=>modificar(listadoRegistrosNuevo));
        })
        eBtn2.addEventListener("click",()=>{
            eNombre = element.nombre;
            eApellido = element.apellido;
            eCorreo = element.correo;
            eTelefono = element.telefono;
            eDireccion = element.direccion;
            eEdad = element.edad;
            eDate = element.date;
            eSuscripcion = element.suscripcion;
            let sEliminar = "<button type='button'class='btn waves-effect waves-light' id='btnEliminar' value='"+i+"'>Eliminar</button>";
            let contenedorBoton = document.getElementById("contenedorBtnExtra");
            contenedorBoton.innerHTML = sEliminar;
            let eBtnEliminarUp = document.getElementById("btnEliminar");
            eBtnEliminarUp.addEventListener("click",()=>eliminar(listadoRegistrosNuevo))           
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
    let listadoRegistros =  localStorage.getItem("registros");
    let listadoRegistrosAntiguo = JSON.parse(listadoRegistros);
    if (listadoRegistrosAntiguo==null){
        let registros = {"id":0, "nombre":nombre,"apellido":apellido,"correo":correo,"telefono":telefono,"direccion":direccion,"edad":edad,"date":date,"suscripcion":suscripcion};
        listadoRegistrosNuevo = [registros]
    }else{
        let registros = {"id":listadoRegistrosAntiguo.length, "nombre":nombre,"apellido":apellido,"correo":correo,"telefono":telefono,"direccion":direccion,"edad":edad,"date":date,"suscripcion":suscripcion};
        listadoRegistrosNuevo = [...listadoRegistrosAntiguo,registros]
    }

    console.log(listadoRegistrosAntiguo);
    console.log(listadoRegistrosNuevo);
    localStorage.setItem('registros',JSON.stringify(listadoRegistrosNuevo));
    
    cargarTabla(listadoRegistrosNuevo);
}

var cargarDatos = ()=>{
    let listadoRegistrosAntiguo = localStorage.getItem("registros");
    let listadoRegistrosNuevo = JSON.parse(listadoRegistrosAntiguo);
    cargarTabla(listadoRegistrosNuevo)
}

document.getElementById("btn").addEventListener("click",registra)
addEventListener('load',cargarDatos)