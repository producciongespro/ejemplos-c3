import cargarDatos from "./cargar-datos.js";

let runtime;
let preguntas;
let indice = 0;
let txtPregunta;
let btnOpciones;
let retroSeleccion;



export async function setup (rt) {	
	runtime = rt;
	preguntas = await cargarDatos(runtime);
	setTimeout( 
		()=> runtime.goToLayout("Principal"), 
		500 )	
}


export function init () {
	console.log("preguntas", preguntas);
	txtPregunta = runtime.objects.txtPregunta.getFirstInstance();
	btnOpciones = runtime.objects.btnOpciones.getAllInstances();
	retroSeleccion = runtime.objects.retroSeleccion.getFirstInstance();
	indice = 0;
	renderItem()
}


function renderItem () {
	txtPregunta.text = preguntas[indice].pregunta;
	btnOpciones[0].text = preguntas[indice].opcion1;
	btnOpciones[1].text = preguntas[indice].opcion2;
	btnOpciones[2].text = preguntas[indice].opcion3;
	
	console.log("opcion 1 del array",  preguntas[indice].opcion1);
	console.log ("render", btnOpciones[0].text)
}

export function handlePasarItem () {
	const btnPasarPregunta = runtime.objects.btnPasarPregunta.getFirstPickedInstance();
	const id = btnPasarPregunta.instVars.id;
	if ( id == "adelante") {
		if ( indice < preguntas.length - 1) {
				indice++
				retroSeleccion.isVisible= false;
			}
	};
		if ( id == "atras") {
			if (indice > 0) {
				indice--
				retroSeleccion.isVisible= false;
			}
		
	}
	renderItem ();
}


export function handleSeleccionarOpcion () {
	const seleccion = runtime.objects.btnOpciones.getFirstPickedInstance();
	console.log(seleccion.instVars.opcion);
	
	if (seleccion.instVars.opcion == preguntas[indice].respuesta ) {
		console.log( "Muy bien" );
		mostrarRetro("Correcta");
	} else {
		console.log( "Muy mal" );
		mostrarRetro("Incorrecta");
	}
}


function mostrarRetro (tipo) {
	
	
	retroSeleccion.setAnimation(tipo);
	retroSeleccion.isVisible = true;
	
}





