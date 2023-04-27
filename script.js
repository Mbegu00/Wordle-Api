const BOTON = document.getElementById('guess-button')
const CONTENEDOR = document.getElementById('guesses')
let intentos = 6
let palabra = 'APPLE'
let palabrass = ['APPLE','GRAPE','CHAIR','TABLE','HOUSE']
BOTON.addEventListener('click', intentar)
palabra = palabrass[Math.floor(Math.random()*palabra.length)];


function intentar() {
    let intento = document.getElementById('guess-input').value
    CONTENEDOR.innerHTML = ``
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