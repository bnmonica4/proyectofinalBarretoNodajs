let url = "https://openweathermap.org/"

const climaContainer = document.getElementById("clima-container")

fetch(url)
.then((response)=> response.json())
.then(data =>{

let clima = data.results

clima.forEach( ( clima)=>{
    fetch(clima.url)
    .then((response)=>response.json())
    .then( climaData => {

        const climaElement = document.createElement("div")
        climaElement.innerHTML=`

        <h2>${climaData.name}</h2>



    `

    })
})

})