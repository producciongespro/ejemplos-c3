import cargarDatos from "./cargar-datos.js";

let runtime;
let preguntas;
let indice = 0;
let txtPregunta;
//Variable que almacena un arreglo de objetos (en este caso los botones de opciones)
let btnOpciones;
let retroSeleccion;


/*
Procedimiento que se ejectua cuando carga el splash
Este llama a la función "cargarDatos" que se encarga de 
obtener los datos del jsson ("preguntas.json").
Una vez obtenidos estos datos lo asigna sobre la variable "preguntas"
y despúes de unos segundos carga el layout (vista o escena) "Principal"
que es la que va a mostrar las preguntas.
*/
export async function setup (rt) {	
	runtime = rt;
	preguntas = await cargarDatos(runtime);
	setTimeout( 
		()=> runtime.goToLayout("Principal"), 
		1500 )	
}


/*
Procedimiento que se encarga de inicializar referencias (carga los objetos del layout para pder ser utilizados desde el script)
y carga la pregunta uno con sus opciones respectivas.

*/
export function init () {
	console.log("preguntas", preguntas);
	txtPregunta = runtime.objects.txtPregunta.getFirstInstance();
	btnOpciones = runtime.objects.btnOpciones.getAllInstances();
	retroSeleccion = runtime.objects.retroSeleccion.getFirstInstance();
	indice = 0;
	renderItem()
}


/*
Carga la pregunta y sus opciones respectivas.
Se utiliza la variable "indice" para determinar el item que se 
va a cargar en determinado momento
*/
function renderItem () {
	//Se obtiene el array de "btnOpciones" y cada elemento el arreglo es una
	//opción del item. 
	txtPregunta.text = preguntas[indice].pregunta;
	btnOpciones[0].text = preguntas[indice].opcion1;
	btnOpciones[1].text = preguntas[indice].opcion2;
	btnOpciones[2].text = preguntas[indice].opcion3;		
	/*
	Si hubiese una cuarta opción solo se agrega esta linea:
	btnOpciones[3].text = preguntas[indice].opcion4;		
	*/
}


/*
Método que se llama desde el evento "click" del botón pasarPregunta
La funcionalidad es incrementar o decrementar la variable "indice"
*/
export function handlePasarItem () {
	const btnPasarPregunta = runtime.objects.btnPasarPregunta.getFirstPickedInstance();
	const id = btnPasarPregunta.instVars.id;
	//Validación para evitar desbordamiento superior (overflow)
	if ( id == "adelante") {
		if ( indice < preguntas.length - 1) {
				indice++
				retroSeleccion.isVisible= false;
			}
	};
		if ( id == "atras") {
	//Validación para evitar desbordamiento inferior (underflow)
			if (indice > 0) {
				indice--
				retroSeleccion.isVisible= false;
			}		
	}
	renderItem ();
}

/*
Método que se llama en el evento "click" del botónopciones
para verificar si la opción que selecciona es igual a la respuesta correcta
*/
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

/*
	Carga la anmación respectiva (correcta o incorrecta)
*/
function mostrarRetro (tipo) {
	retroSeleccion.setAnimation(tipo);
	retroSeleccion.isVisible = true;	
}





