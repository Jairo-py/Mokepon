/* estas variables son de la funcion iniciar juego */
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonMascotaJugador = document.getElementById('boton-mascota')
sectionReiniciar.style.display = 'none'
const botonReiniciar = document.getElementById('boton-reiniciar')
/* estas variables son dela funcion seleccionar mascota jugador */
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
/* esta variable es la fubcion selecionar mascota enemigo */
const spanMascotaEnemigo = document.getElementById('mascota-enemigo')
/* estas varibales son de la funcion comabate */
const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')
/* estas variables son de la funcion crear mensaje */
const sectionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataques-del-jugador')
const ataquesDelEnemigo = document.getElementById('ataques-del-enemigo')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorAtaques = document.getElementById('contenedorAtaques')
/* estas dos constantes son para la etiqueta canvas */
const sectionVerMapa = document.getElementById('ver-mapa')
const sectionMapa = document.getElementById('mapa')

let mokepones = []/* corchetes cuadrados significa que se puede ir ingresando cada uno de los valores que nos interesen se una para crear un arreglo comosi fuese una caja que guarda datos*/
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHipodoge
let inputCapipepo
let inputRatigueya
let mascotaJugador
let mascotaJugadorObjeto
let ataquesMokepon
let ataquesMokeponEnemigo
let botonFuego 
let botonAgua 
let botonTierra 
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
/* esta variable es para trabajar con el canvas y 2d porque se 
va a trabajar en formato 2d */
let lienzo = sectionMapa.getContext("2d")
/* esta variable  es para guardar toda la estructura del html que se va hacer en javascript y despues inyectar esa variable con toda la estructura como valor directamente en nuestro html*/
let intervalo
// la siguiente varible es para el mapa, se le asigna el parametro Image
//y a la variable mapaBackground se le pide que carge la imagen en la funcion donde
// se le esta llamando con sus parametros
let mapaBackground = new Image()
mapaBackground.onload = function() {
    lienzo.drawImage(mapaBackground, 1000, 1000)
  }
  mapaBackground.src = './imajmokepon/mapa1.jpg'
//mapaBackground.src = './imajmokepon/mapajuego.png'


/* se crean las clases */
class Mokepon{
    /* la funcion constructor nos permite crear objetos apartir de la clase y con los elementos, atributos o informacion  que se le asignen */
    constructor(nombre, foto, vida, fotoMapa, x = 210, y = 140){
        /* this hace referencia al abjeto actual donde se encuentra para nombrarlo */
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = [] /* va con corchetes cuadrados porque esto es un arreglo */
        /*console.log (Mokepon);  con este codigo podemos revisar que la varianle se este ejecutando bien y nos cree el elemento en consola del navegador*/
        /* en esta calse para los picachu se van a crear los
        atributos de x,y, ancho y alto (x, y es la ubicaciondentro del canvas ) */
        this.x = x
        this.y = y
        this.ancho = 40
        this.alto = 40
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadx = 0
        this.velocidady = 0
    }
     //con este lienzo estamos pintando la cara de nuestro
     // jugador de acuerdo a parametros de la clase
    pintarMokepon(){
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto,
        )
    }
    
}
/* variables para contruir mokepones con obetos en clases */
// con este array estamos llamando la cara nu nuestro jugador en el mapa
let hipodoge = new Mokepon('Hipodoge','./imajmokepon/Hipodoge.png', 5, './imajmokepon/hipodoge1.png')
let capipepo = new Mokepon('Capipepo','./imajmokepon/Capipepo.png', 5, './imajmokepon/capipepo1.png')
let ratigueya = new Mokepon('Ratigueya','./imajmokepon/Ratigueya.png', 5, './imajmokepon/ratigueya1.png')

//aca con este array vamos a mostrar la cara del jugador enemigo en el mapa
//los ultimos numeros es para darle la posicion donde quiero que apareza el enmigo
let hipodogeEnemigo = new Mokepon('Hipodoge','./imajmokepon/Hipodoge.png', 5, './imajmokepon/hipodoge1.png',130,420)
let capipepoEnemigo = new Mokepon('Capipepo','./imajmokepon/Capipepo.png', 5, './imajmokepon/capipepo1.png', 666, 310)
let ratigueyaEnemigo = new Mokepon('Ratigueya','./imajmokepon/Ratigueya.png', 5, './imajmokepon/ratigueya1.png', 860, 190)

// let tyranitar = new Mokepon('Tyranitar','./imajmokepon/Tyranitar.png', 5)
// let picachu = new Mokepon('Picachu','./imajmokepon/Picachu.png', 5)
// let riolu = new Mokepon('Riolu','./imajmokepon/Riolu.png', 5)

/* el push es enpuja o inyecta un valor en la variable mokepones que es un arreglo para asi mandar a llamar todos los objetos con una sola variable que en esta caso son las variables de los objetos, se puede hacer por separado o todo en una linea de codigo como esta aca */
/* mokepones.push(hipodoge, capipepo, ratigueya) */
/* añadiedole el codigo .length de esta manera se podria ver la cantidad de valores que ahi dentro del arreglo console.log(mokepones.length) Conocer la cantidad de datos dentro de un array te permitirá manipular la información y programar la lógica de tu aplicación con más precisión.*/
/* console.log(mokepones.length) */

/* llamdo solo el nombre de la variable mas el punto seguido y nombre del objeto mas punto y push para que enpuje el objeto que queremos jalar para solor ver ese obketo en especifico hipodoge.ataques
 */
hipodoge.ataques.push(
    { nombre:'💦', id:'boton-agua'},
    { nombre:'💦', id:'boton-agua'},
    { nombre:'💦', id:'boton-agua'},
    { nombre:'🔥', id:'boton-fuego'},
    { nombre:'🌱', id:'boton-tierra'},
)

capipepo.ataques.push(
    { nombre:'🌱', id:'boton-tierra'},
    { nombre:'🌱', id:'boton-tierra'},
    { nombre:'🌱', id:'boton-tierra'},
    { nombre:'💦', id:'boton-agua'},
    { nombre:'🔥', id:'boton-fuego'},
    
)

ratigueya.ataques.push(
    { nombre:'🔥', id:'boton-fuego'},
    { nombre:'🔥', id:'boton-fuego'},
    { nombre:'🔥', id:'boton-fuego'},
    { nombre:'💦', id:'boton-agua'},
    { nombre:'🌱', id:'boton-tierra'},
)


mokepones.push(hipodoge,capipepo,ratigueya)


function iniciarJuego(){
    sectionSeleccionarAtaque.style.display = 'none'
    /* este section aca se deja en none para que no apareza el canvas todavia */
    sectionVerMapa.style.display = 'none'
/*  este metodo nos ayuda a iterar o recorrer cad auno de los objetos que esta dentro del arreglo para extraer informacion e inyectarla en html*/
/* forEach por cada uno de los mokenos has algo es lo que traduce */
/* esta linea de codigo dice por cada mokeon que existe en nuestro arerglo de mokepones has lo siguiente, y ahi vamos a tomar la informacion de cada uno de los obetos para inyectarla al html*/
    mokepones.forEach((mokepon) =>{
        opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} /> 
        <label class="tarjeta-de-picachu" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src =${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `
        /* aca se llama la varible contenedorTarjetas para que mos llamela variable opciondemokepones */
        /* el signo +antes del = es oara que nos salgan las 3 tarejtas */
        contenedorTarjetas.innerHTML += opcionDeMokepones

            inputHipodoge = document.getElementById('Hipodoge')
            inputCapipepo = document.getElementById('Capipepo')
            inputRatigueya = document.getElementById('Ratigueya')
    })

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador(){
    sectionSeleccionarMascota.style.display = 'none'
    
    /* aca se crea una variable para insertarla dentro del lienzo que va hacer el picachu */
    //let imagenDeCapipepo = new Image()
    //imagenDeCapipepo.src = capipepo.foto
    /* aca con la variable lienzo se esta cargando la foto del mokepon al lienzo 
    la funcion drawImage es para lamar la foto*/


    /* aca se toma esta funcion de dubujar imagen y se lleva al fianl 
    lienzo.drawImage(
        imagenDeCapipepo,
        100,
        60,
        100,
        100,
    )
    */

    /* aca se llama a la varibale linezo para dibujar 
    sobre el, fillRect esta funcion lo que hace es que
    crea un rectangulo dentro del canvas*/
    /* el primer numero es para el vertice x
    segundo numero vertice y
    tercer numero es un alto
    y cuarto numero es el ancho, estos son los parametros de lo se dibuja en el canvas*/
    //  lienzo.fillRect(5,15,20,40)   
    // la funcion fue para comprobar que se dibujara el rectangulo y se miro en consola
    
    // aca estamos pidiendo que llame la funcion iniciar mapa que esta al final
    

    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert('Selecciona una mascota')
    }
    
   
    // sectionSeleccionarAtaque.style.display = 'flex'
    // aca estamos ocultando que nos apareza los ataques
    // para luego ver el mapa de canvas
    sectionVerMapa.style.display = 'flex'
    iniciarMapa()

    seleccionarMascotaEnemigo()
}

function extraerAtaques(mascotaJugador) {
    let ataques = mascotaJugador.ataques
    
    /* conole.log nos muestra en consola que ya se este ejecuntando los ataques de la mascota seleccionada */
    /* console.log(ataques) */
    mostrarAtaques(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) =>{
            ataquesMokepon = `
            <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
            `
            /* aca se esta rendereizando cada ataque del personaje */
            contenedorAtaques.innerHTML += ataquesMokepon
            extraerAtaques(mascotaJugador)
    })

    /* aca se selecciona el boton para los ataques */
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
    botones = document.querySelectorAll('.BAtaque')

    /* aca se agrega el evento de click a los botones */
    /* botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra) */
   
}

function secuenciaAtaque(){
    botones.forEach((boton) =>{
        boton.addEventListener('click', (e) =>{
            if(e.target.textContent === '🔥'){
                ataqueJugador.push('FUEGO')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else if (e.target.textContent === '💦'){
                ataqueJugador.push('AGUA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            } else {
                ataqueJugador.push('TIERRA')
                console.log(ataqueJugador)
                boton.style.background = '#112f58'
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
    })
    
}

function seleccionarMascotaEnemigo(){
    /* Obtenemos un índice aleatorio dentro de la cantidad de datos del array */
    let mascotaAleatoria = aleatorio(0, mokepones.length -1)

    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
    /*if (mascotaAleatoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }  */
}
/* function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
}
 */

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(0,ataquesMokeponEnemigo.length -1)
    
    if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
        ataqueEnemigo.push('FUEGO')
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4) {
        ataqueEnemigo.push('AGUA')
    } else {
        ataqueEnemigo.push('TIERRA')
    }
    console.log(ataqueEnemigo)
    iniciarPelea()
}

function iniciarPelea(){
    if (ataqueJugador.length === 5){
        combate()
    }
}

function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){
    for (let index = 0; index < ataqueJugador.length; index++){
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE")
            spanVidasJugador.innerHTML = victoriasJugador
        } else if(ataqueJugador[index] === 'FUEGO' && ataqueEnemigo[index] === 'TIERRA'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if(ataqueJugador[index] === 'AGUA' && ataqueEnemigo[index] === 'FUEGO'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if(ataqueJugador[index] === 'TIERRA' && ataqueEnemigo[index] === 'AGUA'){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        }  else {
            indexAmbosOponentes(index, index)
            crearMensaje("PERDISTE")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        } 
    }
    revisarVidas()
}
        
     /* }
    if(ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    } */   
    
    
function revisarVidas(){
    if (victoriasJugador === victoriasEnemigo) {
        crearMensajeFinal("HAS EMPATADO😊")
    } else if (victoriasJugador > victoriasEnemigo) {
        crearMensajeFinal("FELICITACIONES, HAS GANADO🎉")
    } else {
        crearMensajeFinal("LO SIENTO, HAS PERDIDO😢")
    }
}

function crearMensaje(resultado){
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/* esta funcion es para pintar el picachu de acuerdo a los parametros que se le asignaron en la clase arriba */
function pintarCanvas() {
    

    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadx
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidady
    lienzo.clearRect(0, 0, sectionMapa.width, sectionMapa.height)
    // la siguiente linea de codigo es para dibujar en el lienzo 
    //el mapa con sus propiedades (variable mapaBackground)
    lienzo.drawImage(mapaBackground, 0, 0, mapaBackground.width, mapaBackground.height)
    /*aca se usa el obajeto que se creo de la 
    mascota jugador y de este obajeto llamamos a la funcion pintar que
    se creo en la clase arriba de nuestero mokepon */
   
    //pintamos la mascota del jugador seleccionada
    mascotaJugadorObjeto.pintarMokepon()

    //aca pintamos la mascota del enemigo
    hipodogeEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigueyaEnemigo.pintarMokepon()
}

/* esta funcion nos permite los movimientos del picachu por el mapa */

function moverDerecha() {
    mascotaJugadorObjeto.velocidadx = 5
    /*  capipepo.x = capipepo.x + 5
    pintarPersonaje()
    con estos para metros dentro de la funcion el objeto se 
    va a mover de acuerdo a los click que le demos
    pero lo vamos a cambiar a uqe se mueva por el tiempo que se tenga 
    precionada la tecla
    */
}
function moverIzquierda() {
    mascotaJugadorObjeto.velocidadx = -5
}
function moverAbajo() {
    mascotaJugadorObjeto.velocidady = 5
}
function moverArriba() {
    mascotaJugadorObjeto.velocidady = -5
}
function detenerMovimiento() {
    mascotaJugadorObjeto.velocidadx = 0
    mascotaJugadorObjeto.velocidady = 0
}

function sePresionoUnaTecla(event){
    //aca se imprime el key para compribar que en consola ya se muestran las teclas oprimidas en el teclado
    //console.log(key); 
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        default:
            break
    }
}

function iniciarMapa () {
    // aca vamos hacer que nuestro mama se vea mas grande
    //de acuerdo a las caracteristicas de la imagen ancho y alto para que se vea toda en el mapa
    sectionMapa.width = 920
    sectionMapa.height = 480
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
     /* aca con esta funcion estamos diciendo que cada 50 milisegundos se 
    pinte la imagen de capipepo aumentando su posicion  de acuerdo a la velocidad
     */
    //console.log(mascotaJugadorObjeto,mascotaJugador);
    intervalo = setInterval(pintarCanvas, 50)
    /* aca se agrega un nuevo addEvenlistener para que 
    se mueva con el teclado, el evento es keydwon que se va a ejecutar cuando se precione una tecla*/
    window.addEventListener('keydown', sePresionoUnaTecla)
    /* este nuevo addEvenlistener es para que deje de 
    escuchar la funcion para que no se mueva al soltar el 
    teclado la funcion o el evento es keyup deterner movimiento*/
    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoMascota() {
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
    }

}
window.addEventListener('load', iniciarJuego)