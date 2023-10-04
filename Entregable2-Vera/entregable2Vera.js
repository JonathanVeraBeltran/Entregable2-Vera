
    const preguntas = [
        {
            pregunta: '¿Cuál es la parte mas externa del ojo humano?',
            opciones: ['La Pupila', 'La Córnea', 'El Iris', 'La Retina'],
            respuestaCorrecta: 'La Córnea'
        },
        {
            pregunta: '¿Cómo se dice OESTE en inglés?',
            opciones: ['Oest', 'East', 'West', 'Easter'],
            respuestaCorrecta: 'West'
        },        {
            pregunta: '¿De dónde era Don Quijote?',
            opciones: ['De América', 'De Bilbao', 'De Brasil', 'De La mancha'],
            respuestaCorrecta: 'De La mancha'
        },        {
            pregunta: '¿Cuál era el idioma oficial del imperio Romano?',
            opciones: ['El Hebreo', 'El Griego', 'El Latín', 'El Romano'],
            respuestaCorrecta: 'El Latín'
        },
        {
            pregunta: '¿Cuál es el continente más pequeño del planeta tierra?',
            opciones: ['Europa', 'África', 'Oceanía', 'América'],
            respuestaCorrecta: 'Oceanía'
        },
        {
            pregunta: '¿Qué animal no es capaz de reconocerse a si mismo en un espejo?',
            opciones: ['El Delfín', 'El Lobo', 'El Chimpancé', 'El Gato'],
            respuestaCorrecta: 'El Lobo'
        },
    ];

    let PreguntaActualIndex = 0;
    const preguntaPregunta = document.getElementById('pregunta');
    const opcionesOpciones = document.getElementById('opciones');
    const resultadoResultado = document.getElementById('resultado');

    function mostrarPregunta() {
        const preguntaActual = preguntas[PreguntaActualIndex];
        preguntaPregunta.textContent = preguntaActual.pregunta;

        opcionesOpciones.innerHTML = '';
        preguntaActual.opciones.forEach((opcion, index) => {
            const tipoDeOpcion = document.createElement('div');
            tipoDeOpcion.classList.add('opcion');
            tipoDeOpcion.textContent = opcion;
            tipoDeOpcion.addEventListener('click', () => verificador(opcion, preguntaActual.respuestaCorrecta));
            opcionesOpciones.appendChild(tipoDeOpcion);
        });
    }

    function verificador(respuestaSeleccionada, respuestaCorrecta) {
        if (respuestaSeleccionada === respuestaCorrecta) {
            resultadoResultado.textContent = 'Correcto, muy bien!!!!';
        } else {
            resultadoResultado.textContent = 'Incorrecto. La respuesta correcta es: ' + respuestaCorrecta;
        }



        setTimeout(() => {
            resultadoResultado.textContent = '';
            PreguntaActualIndex++;
            if (PreguntaActualIndex < preguntas.length) {
                mostrarPregunta();
            } else {
                preguntaPregunta.textContent = '¡Fin del juego!';
                opcionesOpciones.innerHTML = '';
            }
        }, 1000);
    }



    mostrarPregunta();