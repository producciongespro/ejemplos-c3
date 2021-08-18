export function setup (runtime) {
	
	//tipoObjeto(runtime);
	//instanciaBtn1(runtime);
	instanciasBtnOk(runtime);
};


function tipoObjeto (runtime) {	
	//Se obtiene la clase del botón
	//Se genera un obyect type de btn1
	// Al no ser instancia no se le puede agregar manejador de eventos
	const Btn1 = runtime.objects.btn1;
	console.log(Btn1)
	
	//se puede crear una instancia de esa clase
	const newBtn1 = Btn1.createInstance(0, 200, 200);
	newBtn1.text = "Soy un nuevo btn";	
	newBtn1.instVars = {id: "btn123"};
	console.log(newBtn1);
	
	const id = newBtn1.instVars.id;
	
	newBtn1.addEventListener ("click", ()=>{
		console.log("Soy el nuevo botón y estoy saludando y mi id es", id)
	})
	
}

function instanciasBtnOk (runtime) {
	//Se genera una instancia de un objeto
	const btnOk = runtime.objects.btn1.getFirstInstance();
	console.log(btn1);	
	//btn1.text = "Saludar"
	
	btn1.addEventListener("click", (e)=> {
		console.log ("Clic", e)
	})
}

function instanciasBtn1 (runtime) {
	
	const btns1 = runtime.objects.btn1.getAllInstances();
	console.log (btns1);
	
	
	btns1.forEach (item => {
		console.log ("item.instVars.posicion", item.instVars.posicion);
		item.addEventListener ("click", ()=> {
			handleSaludar (item.instVars.posicion)
		} )
	})	
}

function handleSaludar (pos) {
	console.log(pos);
}

