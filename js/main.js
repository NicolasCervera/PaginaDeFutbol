function agregarPista(texto) {
    $pistas = document.querySelector('.pistas');

    $pistas.classList.remove('hidden');

    $pista = document.createElement('div');
    $pista.classList.add('alert', 'alert-info');
    $pista.innerText = texto;

    $pistas.appendChild($pista);
}

function desabilitarFormAdivinanza($botonAceptar) {
    $formAdivinanza = document.querySelector('.adivinanza form');
    $formAdivinanza.classList.add('hidden');

    $botonAceptar.remove();
}

function mostrarMsjResultado($botonAceptar, ganador) {
    $notificacion = document.querySelector('#notificacion');
    $notificacionTitulo = document.createElement('h4');

    if(ganador) {
        $notificacion.classList.add('alert-success');
        $notificacionTitulo.classList.add('alert-heading');
        $notificacionTitulo.innerText = "¡Bien Hecho!";
    } else {
        $notificacion.classList.add('alert-danger');
        $notificacionTitulo.classList.add('alert-heading');
        $notificacionTitulo.innerText = "¡Perdiste!";
    }

    $notificacion.appendChild($notificacionTitulo);

    $notificacionParrafo = document.createElement('p');
    $notificacionParrafo.innerHTML = "El gol fue hecho por Maxi Rodriguez en el Mundial de Alemania de 2006 cuando Argentina y México iban empatados 1-1. \n<hr>A los 8 minutos del \
    tiempo suplementario, Maxi Rodríguez, ubicado en el sector derecho, recibió un pase aéreo de Sorín, detuvo el balón con el pecho y antes de que el mismo cayera al piso realizó \
    un remate que ingresó cerca del palo derecho de Oswaldo Sánchez. Este gol fue votado como el mejor gol del torneo​ y le permitió a la Argentina obtener el pase a los cuartos \
    de final tras vencer a México por 2:1. Rodríguez fue elegido como el mejor jugador del encuentro";
    
    $notificacion.appendChild($notificacionParrafo);

    $notificacion.classList.remove('hidden');
    
    desabilitarFormAdivinanza($botonAceptar);
}

function habilitarAdivinanza() {
    let intentos = 4;
    $inputAño = document.querySelector('#año-gol');
    $botonAceptar = document.querySelector('#boton-adivinanza');
    $numeroIntentos = document.querySelector('#numero-intentos');
    

    $botonAceptar.addEventListener('click', () => {
        event.preventDefault();
        if(Number($inputAño.value) === 2006) {
            mostrarMsjResultado($botonAceptar, true);
        } else if(intentos === 2) {
            agregarPista('Fue el primer mundial al que asistio Messi')
        } else if(intentos === 3) {
            agregarPista('Fue en un mundial con sede en Alemania')
        } else if(intentos === 1) {
            mostrarMsjResultado($botonAceptar, false);
        }

        intentos -= 1;
        $numeroIntentos.innerText = intentos;
    })

}

habilitarAdivinanza();