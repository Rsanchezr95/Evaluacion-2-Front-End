// Proyectos activos
let proyectos = [];

// Proyectos terminados
let proyectosTerminados = [];


//HTML 
const nombreProyecto = document.getElementById("nombreProyecto");
const categoriaProyecto = document.getElementById("categoriaProyecto");
const agregarProyecto = document.getElementById("agregarProyecto");

//Donde se exponen los proyectos activos
const contenedorProyectos = document.querySelector("#contenedorProyectos");

//Donde se exponen los proyectos finalizados
const contenedorTerminados = document.getElementById("contenedorTerminados");

//Formulario de contacto
const formularioContacto = document.querySelector("form");


agregarProyecto.addEventListener("click", agregarNuevoProyecto);

if(formularioContacto){
    formularioContacto.addEventListener("submit", validarFormularioContacto);
}



//Proyectos
function agregarNuevoProyecto(){

    try{

        const nombre = limpiarTexto(nombreProyecto.value);
        const categoria = limpiarTexto(categoriaProyecto.value);

        if(nombre === "" || categoria === ""){

            alert("Debe completar todos los campos");

            return;
        }

        const proyecto = {

            id: Date.now(),

            nombre: escaparHTML(nombre),

            categoria: escaparHTML(categoria),

            imagen: "images/portfolio_1.jpg"
        };

        proyectos.push(proyecto);

        renderizarProyectos();

        limpiarFormulario();

    }

    catch(error){

        console.log(error);

    }

}

//Cambiar el nombre
function modificarNombre(id){

    const proyecto = proyectos.find(
        proyecto => proyecto.id === id
    );

    if(!proyecto){

        return;

    }

    const nuevoNombre = prompt(
        "Ingrese el nuevo nombre:",
        proyecto.nombre
    );

    if(
        nuevoNombre === null ||
        nuevoNombre.trim() === ""
    ){

        return;

    }

    proyecto.nombre = escaparHTML(
        limpiarTexto(nuevoNombre)
    );

    renderizarProyectos();

}


//Cambiar la categoria
function modificarCategoria(id){

    const proyecto = proyectos.find(
        proyecto => proyecto.id === id
    );

    if(!proyecto){

        return;

    }

    const nuevaCategoria = prompt(
        "Ingrese la nueva categoría:",
        proyecto.categoria
    );

    if(
        nuevaCategoria === null ||
        nuevaCategoria.trim() === ""
    ){

        return;

    }

    proyecto.categoria = escaparHTML(
        limpiarTexto(nuevaCategoria)
    );

    renderizarProyectos();

}


//Mostrar los proyectos

function renderizarProyectos(){

    contenedorProyectos.innerHTML = "";

    proyectos.map((proyecto)=>{

        contenedorProyectos.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card shadow">

                <img
                    src="${proyecto.imagen}"
                    class="card-img-top"
                    alt=""
                    height="250"
                >

                <div class="card-body">

                    <h5>${proyecto.nombre}</h5>

                    <p>${proyecto.categoria}</p>

                    <button
                        class="btn btn-success"
                        onclick="terminarProyecto(${proyecto.id})">
                        Terminar
                    </button>

                    <button
                        class="btn btn-warning"
                        onclick="modificarNombre(${proyecto.id})">
                        Modificar nombre
                    </button>

                    <button
                        class="btn btn-info"
                        onclick="modificarCategoria(${proyecto.id})">
                        Cambiar categoría
                    </button>

                    <button
                        class="btn btn-danger"
                        onclick="eliminarProyecto(${proyecto.id})">
                        Eliminar
                    </button>

                </div>

            </div>

        </div>

        `;

    });

}

//Mostrar proyectos terminados
// MUESTRA LOS PROYECTOS TERMINADOS
function renderizarTerminados(){

    contenedorTerminados.innerHTML = "";

    proyectosTerminados.map((proyecto)=>{

        contenedorTerminados.innerHTML += `

        <div class="col-md-4 mb-4">

            <div class="card border-success shadow">

                <img
                    src="${proyecto.imagen}"
                    class="card-img-top"
                    alt=""
                    height="250"
                >

                <div class="card-body">

                    <h5>${proyecto.nombre}</h5>

                    <p>${proyecto.categoria}</p>

                    <span class="badge bg-success">
                        Terminado
                    </span>

                </div>

            </div>

        </div>

        `;

    });

}


//Eliminar un proyecto
function eliminarProyecto(id){

    proyectos = proyectos.filter(
        proyecto => proyecto.id !== id
    );

    renderizarProyectos();

}


//Terminar un proyecto
function terminarProyecto(id){

    const proyecto = proyectos.find(
        proyecto => proyecto.id === id
    );

    if(!proyecto){

        return;

    }

    // Lo agrega a terminados
    proyectosTerminados.push(proyecto);

    // Lo elimina de activos
    proyectos = proyectos.filter(
        proyecto => proyecto.id !== id
    );

    // Actualiza ambas secciones
    renderizarProyectos();

    renderizarTerminados();

}

//modificar un proyecto
// FUNCION PARA MODIFICAR PROYECTO
function modificarProyecto(id){

    const proyecto = proyectos.find(
        proyecto => proyecto.id === id
    );

    if(!proyecto){

        return;

    }

    const nuevoNombre = prompt(
        "Nuevo nombre:",
        proyecto.nombre
    );

    if(nuevoNombre === null){

        return;

    }

    const nuevaCategoria = prompt(
        "Nueva categoría:",
        proyecto.categoria
    );

    if(nuevaCategoria === null){

        return;

    }

    proyecto.nombre = escaparHTML(
        limpiarTexto(nuevoNombre)
    );

    proyecto.categoria = escaparHTML(
        limpiarTexto(nuevaCategoria)
    );

    renderizarProyectos();

}



//Validar el contacto en el formulario
function validarFormularioContacto(event){

    event.preventDefault();

    try{

        const inputs =
            formularioContacto.querySelectorAll("input");

        const textarea =
            formularioContacto.querySelector("textarea");

        const nombre = inputs[0].value.trim();
        const email = inputs[1].value.trim();
        const asunto = inputs[2].value.trim();
        const mensaje = textarea.value.trim();

        if(
            nombre === "" ||
            email === "" ||
            asunto === "" ||
            mensaje === ""
        ){

            alert("Todos los campos son obligatorios");

            return;

        }

        const emailValido =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailValido.test(email)){

            alert("Correo inválido");

            return;

        }

        alert("Mensaje enviado correctamente");

        formularioContacto.reset();

    }

    catch(error){

        console.log(error);

    }

}


//Limpiar texto (cls)
function limpiarTexto(texto){

    return texto.trim();

}


//Limpiear los inputs
function limpiarFormulario(){

    nombreProyecto.value = "";

    categoriaProyecto.value = "";

}


//Prevenir XSS
function escaparHTML(texto){

    return texto
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;");

}