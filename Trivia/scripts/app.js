import cargarDatos from "./cargar-datos.js";

let preguntas;


export async function setup (runtime) {	
	preguntas = await cargarDatos(runtime);
	setTimeout( 
		()=> runtime.goToLayout("Principal"), 
		1500 )	
}


export function init () {
	console.log("preguntas", preguntas);
}