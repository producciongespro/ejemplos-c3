


 export async function setup (runtime) {
	const infoJson = await runtime.assets.getProjectFileUrl("info.json");
	 let data = await fetch(infoJson);
	 data = await data.json();
	 console.log(data);
	const Miniatura	 = runtime.objects.miniatura; 
	 
	 data.forEach ((item, i) => {
		  console.log(item.animacion, ">POS>", i );
		 const nuevaMiniatura = Miniatura.createInstance(0, item.posX, item.posY);
		 nuevaMiniatura.setAnimation(item.animacion);
		 nuevaMiniatura.instVars.texto = item.texto;		 
		
	 })
	
	 
	
	
}