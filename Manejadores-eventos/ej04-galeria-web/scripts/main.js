

export async function setup (runtime) {
	
	let posX = 100;
	const BtnInfo = runtime.objects.btnInfo;
	
	
	const urlJson = await runtime.assets.getProjectFileUrl ("info.json");
	console.log(urlJson)
	
	let data = await fetch(urlJson);
	data = await data.json();
	console.log(data);
	
	data.forEach((item, i)=> {
	
		const nuevoBtn = BtnInfo.createInstance(0, posX, 100 );
		nuevoBtn.text= item.etiqueta;
		nuevoBtn.instVars.descripcion = item.descripcion;
		nuevoBtn.instVars.url= item.url;
		
		nuevoBtn.addEventListener("click", handleMostrarSitio );
		
		posX +=100;
		
	})
	
	
	
}


function handleMostrarSitio (e) {
	//btn.instVars.url
	console.log(e)
	
}