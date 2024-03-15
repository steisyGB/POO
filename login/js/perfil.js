

const formulario = document.getElementById('datosU')
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()

    const nombre = document.getElementById('nombre').value;
    const fechanac = document.getElementById('fecha').value;
    const genero = document.getElementById('genero').value;
    const departamento = document.getElementById('departamento').value;
    const ciudad = document.getElementById('ciudad').value;
    const telefono = document.getElementById('numero').value;
    const descripcion = document.getElementById('descripcion').value;


    const datosperfil = {
        usuario: nombre,
        nacimiento: fechanac,
        genero: genero,
        departamento: departamento,
        ciudad: ciudad,
        telefono: telefono,
        descripcion: descripcion
    }

    localStorage.setItem('datosperfil', JSON.stringify(datosperfil))

    window.location.href='perfil.html';

})