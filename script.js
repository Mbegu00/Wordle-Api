//OBS:Función asíncrona
//Se encarga de buscar una palabra de 5 letras por medio de una API
//En caso de que la API no responda, usa palabra del array predeterminado

const BOTON = document.getElementById('guess-button')
const CONTENEDOR = document.getElementById('guesses')
let intentos = 6

const UrlApi = 'https://random-word-api.herokuapp.com/word?lang=en&length=5';
BOTON.addEventListener('click', intentar)

let palabra
fetch(UrlApi).then(response => response.json())
    .then(response => {
        palabra = response[0].toUpperCase()
        console.log(palabra);
        
})
.catch(err => {
    console.log('hubo un problema con la API! :(');
});


function intentar() {
    let intento = document.getElementById('guess-input').value
    CONTENEDOR.innerHTML = ``
    if(5 == intento.length){
        if(intento != 0){
            const INTENTO = intento.toUpperCase()
            const GRID = document.getElementById('cuadro')
            const ROW = document.createElement('div')
            ROW.className = 'row'
            for (let i in palabra){
                const SPAN = document.createElement('span')
                SPAN.className = 'letter'
                SPAN.innerHTML = INTENTO[i]
                if(INTENTO[i] == palabra[i]){
                    SPAN.style.backgroundColor = "#79b851"
                }else if(palabra.includes(INTENTO[i])){
                    SPAN.style.backgroundColor = "yellow"
                }else{
                    SPAN.style.backgroundColor = "gray"
                }
                GRID.appendChild(SPAN)
            }
            GRID.appendChild(ROW)
    
            intentos--
            if(INTENTO === palabra){
                final('<h1>Ganaste</h1>')
                return
            }
            if(intentos == 0){
                final('<h1>PERDISTE<h1>')
            }
    
        }else{
            
            sinDatos('<h1>INGRESA UN DATO<h1>')
        }
    }else{
        sinDatos('<h1>INGRESA SI O SI 5 LETRAS<h1>')
    }
    
}

function sinDatos(mensaje){
    CONTENEDOR.innerHTML = mensaje
}

function final(mensaje){
    const INPUT = document.getElementById('guess-input')
    INPUT.disabled = true
    BOTON.disabled = true
    CONTENEDOR.innerHTML = mensaje
}
