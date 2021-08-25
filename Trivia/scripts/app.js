import cargarDatos from "./cargar-datos.js";

let runtime;
let preguntas;
let indice = 0;
let txtPregunta;
let btnOpciones;



export async function setup (rt) {	
	runtime = rt;
	preguntas = await cargarDatos(runtime);
	setTimeout( 
		()=> runtime.goToLayout("Principal"), 
		1500 )	
}


export function init () {
	console.log("preguntas", preguntas);
	txtPregunta = runtime.objects.txtPregunta.getFirstInstance();
	btnOpciones = runtime.objects.btnOpciones.getAllInstances();
	
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
			}
	};
		if ( id == "atras") {
			if (indice > 0) {
				indice--		
			}
		
	}
	renderItem ();
}


export function handleSeleccionarOpcion () {
	const seleccion = runtime.objects.btnOpciones.getFirstPickedInstance();
	console.log(seleccion.instVars.opcion);
	
	if (seleccion.instVars.opcion == preguntas[indice].respuesta ) {
		console.log( "Muy bien" )
	} else {
		console.log( "Muy mal" )
	}
}





