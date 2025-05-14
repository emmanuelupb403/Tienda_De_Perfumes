document.addEventListener('DOMContentLoaded', function(){
    navegacionFija()
    crearNotas()

})

function navegacionFija(){
    const header = document.querySelector('.header')
    const contenedor = document.querySelector('.contenedor')

    window.addEventListener ('scroll', function(){
        if(contenedor.getBoundingClientRect().bottom <1) {
            header.classList.add('fixed')
        }else {
            header.classList.remove('fixed')
        }
    })
}

function crearNotas() {
    const Notas = document.querySelector('.contenedor')
    for (let i = 1; i <= 14; i++){
        const imagen = document.createElement('IMG')
        imagen.src = `src/Perfumeria/Notas/${i}.jpg`
        imagen.alt = `imagen Notas`

        imagen.onclick = function() {
            mostrarImagen(i)
        }

        Notas.appendChild(imagen)
    }
}

function mostrarImagen(i) {

    const imagen = document.createElement('IMG')
        imagen.src = `src/Perfumeria/Notas/${i}.jpg`
        imagen.alt = `imagen full `

    //generar ventada modal
    const modal = document.createElement("DIV")
    modal.classList.add ("modal")
    modal.onclick = cerrarModal
    
    
    //Boton cerrar Modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = "X"
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)

    console.log (modal);
    //agregar al html

    const body = document.querySelector('body')
    body.classList.add('overFlow-hidden')
    body.appendChild(modal)
} 

function cerrarModal (){
    const modal = document.querySelector ('.modal')
    modal.classList.add ('fadeOut')
    
    setTimeout(() => {
        modal?.remove()

        const body = document.querySelector('body')
    body.classList.remove('overFlow-hidden')

    }, 500)
    
}