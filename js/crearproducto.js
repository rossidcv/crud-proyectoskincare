function guardar() {
 
    let n = document.getElementById("txtNombre").value
    let d = document.getElementById("txtDescripcion").value
    let t = document.getElementById("txtTratamiento").value
    let p = parseInt(document.getElementById("txtPrecio").value)
    let i =document.getElementById("txtFoto").value
 
    let producto = {
        nombre: n,
        descripcion: d,
        tratamiento: t,
        precio: p,
        imagen:i
    }
    let url = "https://monicadcv83.pythonanywhere.com/productos"
    var options = {
        body: JSON.stringify(producto),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
       // redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Se ha guardado con éxito")
            window.location.href = "./index.html";  //NUEVO  
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            alert("Error al grabar. Intente nuevamente" )
            console.error(err);
        })
 
}
