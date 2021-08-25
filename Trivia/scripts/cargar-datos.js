
export default async function cargarDatos (runtime) {
	
	const urlPreguntas = await runtime.assets.getProjectFileUrl("preguntas.json");
	let datos = await fetch (urlPreguntas);
	datos = await datos.json();
	
	return datos;
	
}