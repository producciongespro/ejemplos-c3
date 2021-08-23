


export function handleVerColores (runtime) {
	
	const actual = runtime.objects.colores.getFirstPickedInstance();
	const txtVisor = runtime.objects.txtVisor.getFirstInstance();
	const color = actual.instVars.color;
	actual.setAnimation(color);
	txtVisor.text= color;
	setTimeout(()=>{
		actual.setAnimation("Cafe");
	}, 500 )
		
	
}