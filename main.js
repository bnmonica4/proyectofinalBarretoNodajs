// Coder Shoes Women's

const Producto = function(nombre, talla, precio, stock){
    this.nombre = nombre
    this.talla = talla
    this.precio = precio
    this.stock =  stock
}

let producto1 = new Producto("puma carina 2.0 blancos", 38, 50, 4)
let producto2 = new Producto("puma carina 2.0 blancos", 37, 50, 2)
let producto3 = new Producto("puma carina 2.0 negros", 39, 45, 5)
let producto4 = new Producto("nike air force blancos y rosa", 38, 90, 3)
let producto5 = new Producto("nike air force blancos", 38, 90, 1)
let producto6 = new Producto("nike court rosados", 38, 90, 4)
let producto7 = new Producto("nike court rosados", 37, 90, 2)
let producto8 = new Producto("nike court rosados", 39, 90, 3)
let producto9 = new Producto("adidas court alpha negros", 38, 75, 2)
let producto10 = new Producto("adidas court alpha rosados", 38, 60, 3)
let producto11 = new Producto("adidas court alpha blancos", 39, 60, 5)
let producto12 = new Producto("adidas nora negros", 37, 80, 4)
let producto13 = new Producto("adidas nora negros", 39, 80, 5)


let lista = [producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8,producto9,producto10,producto11,producto12,producto13]

if(localStorage.getItem("productos")){
    lista = JSON.parse(localStorage.getItem("productos"))
}else{
    lista = lista
}


function filtrarProductos(){
    const body = document.querySelector("body")
    const input = document.getElementById("filtrarP").value 
    const palabraClave = input.trim().toLowerCase()
    const resultado = lista.filter( (producto)=> producto.nombre.toLowerCase().includes(palabraClave))

    if(resultado.length > 0){

        const container = document.createElement("div")
        container.classList.add("container")

        resultado.forEach( (producto)=>{
            const card =  document.createElement("div")

        const nombre = document.createElement("h2")
        nombre.textContent = `nombre: ${producto.nombre}`
        card.appendChild(nombre)

        const talla = document.createElement("p")
        talla.textContent = `talla: ${producto.talla}`
        card.appendChild(talla)

        const precio = document.createElement("p")
        precio.textContent = `precio: ${producto.precio}`
        card.appendChild(precio)

        const stock = document.createElement("p")
        stock.textContent = `cantidad: ${producto.stock}`
        card.appendChild(stock)

        container.appendChild(card)

        })

        body.appendChild(container)

    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "No hay coincidencias",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    }
}

//Funcion para agregar productos
function agregarProducto(){

    const form = document.createElement("form")
// form.classList.add("button-add")
    form.innerHTML=`
    <label for="nombre-input">Nombre:</label>
    <input id= "nombre-input" type="text" step="0.01">

    <label for="talla-input">Talla:</label>
    <input id= "talla-input" type="number" step="0.01">

    <label for="precio-input">Precio:</label>
    <input id= "precio-input" type="number" step="0.01">

    <label for="stock-input">Stock:</label>
    <input id= "stock-input" type="number" step="0.01">

    <button type="submit">Agregar</button>
    `

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const nombreInput = document.getElementById("nombre-input").value.trim()
        const tallaInput = parseInt(document.getElementById("talla-input").value)
        const precioInput = parseFloat(document.getElementById("precio-input").value)
        const stockInput = parseFloat(document.getElementById("stock-input").value)
    
        if (isNaN(tallaInput) ||isNaN(precioInput) || isNaN(stockInput) || nombreInput === ""){
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Por favor ingrese valores válidos.",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
            return
        }

        const producto = new Producto(nombreInput, tallaInput, precioInput, stockInput)
    
        if (lista.some( (elemento)=> elemento.nombre === producto.nombre)){
            Swal.fire("El producto ya existe.");
            return
        }

        lista.push(producto)

        localStorage.setItem("productos", JSON.stringify(lista)) 
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: (`producto agregado ${producto.nombre} a la lista`),
            showConfirmButton: false,
            timer: 1500
        });
        
    

        const container = document.createElement("div")

        lista.forEach((producto)=>{
            const card = document.createElement("div")

            const nombre = document.createElement("h2")
            nombre.textContent = `nombre: ${producto.nombre}`
            card.appendChild(nombre)
    

            const talla = document.createElement("p")
            talla.textContent = `talla: ${producto.talla}`
            card.appendChild(talla)
    
            const precio = document.createElement("p")
            precio.textContent = `precio: ${producto.precio}`
            card.appendChild(precio)
    
            const stock = document.createElement("p")
            stock.textContent = `cantidad: ${producto.stock}`
            card.appendChild(stock)

            container.appendChild(card)
        })

        const body = document.querySelector("body")
        body.appendChild(container)

        form.reset()

    })

    const body = document.querySelector("body")
    body.appendChild(form)
} 

const filtrarBtn = document.getElementById("filtrar")
filtrarBtn.classList.add("button")
filtrarBtn.addEventListener("click", ()=>{filtrarProductos()})

const agregarBtn = document.getElementById("agregarProducto")
agregarBtn.classList.add("button-addnew")
agregarBtn.addEventListener("click",agregarProducto)



