export function setup () {
	
	const s = document.createElement("script");	
	s.type = "text/javascript";
	s.src = `https://code.jquery.com/jquery-3.6.0.min.js"
			  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="`;
	document.body.appendChild (s);
	
	
	const cdnBoostrap = document.createElement("link");
	cdnBoostrap.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
	cdnBoostrap.setAttribute("rel", "stylesheet");
	
	/*Prueba de botón*/
	var btn = document.createElement("button");
  	var t = document.createTextNode("Prueba");
  	btn.appendChild(t);
	btn.setAttribute("class", "btn btn-info");
  	
	//append in DOM
	document.body.appendChild(cdnBoostrap);	
	document.body.appendChild(btn);		
}