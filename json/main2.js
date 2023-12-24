
fetch("productos.json")
.then( (response)=> response.json())
.then( data=>{

    const zapatos = data.zapatos
    const zapatosContainer = document.getElementById("zapatos-container")
    zapatos.forEach( zapatos => {
        const zapatosElement = document.createElement("p")
        zapatosElement.textContent= `Nombre: ${zapatos.nombre}, Color: ${zapatos.color} Talla: ${zapatos.talla}`
        zapatosContainer.appendChild(zapatosElement)

    })

})

.catch(error=>{
    console.error("ha ocurrido un error ")
})

