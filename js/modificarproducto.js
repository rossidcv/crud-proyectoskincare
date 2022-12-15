console.log(location.search)     // lee los argumentos pasados a este formulario
var args = location.search.substr(1).split('&');  
//separa el string por los “&” creando una lista [“id=3” , “nombre=’tv50’” , ”descripcion=1200”,”stock=20”]
console.log(args)
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
//decodeUriComponent elimina los caracteres especiales que recibe en la URL 
document.getElementById("txtId").value = decodeURIComponent(parts[0][1])
document.getElementById("txtNombre").value = decodeURIComponent(parts[1][1])
document.getElementById("txtDescripcion").value = decodeURIComponent(parts[2][1])
document.getElementById("txtTratamiento").value = decodeURIComponent(parts[3][1])
document.getElementById("txtPrecio").value =decodeURIComponent( parts[4][1])
document.getElementById("txtFoto").value =decodeURIComponent( parts[5][1])

function modificar() {
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let d = document.getElementById("txtDescripcion").value
    let t = document.getElementById("txtTratamiento").value
    let p = parseInt(document.getElementById("txtPrecio").value)
    let i = document.getElementById("txtFoto").value
    let producto = {
        nombre: n,
        descripcion: d,
        tratamiento: t,
        precio: p,
        imagen:i
    }
    let url = "https://monicadcv83.pythonanywhere.com/productos/"+id
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "./index.html";  //NUEVO 
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })      
}
