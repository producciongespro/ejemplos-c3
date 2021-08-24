const URI = "https://www.googletagmanager.com/gtag/js?id=G-YEEY6XREQY";
const G_SCRIPT = 
	  `window.dataLayer = window.dataLayer || [];
  	function gtag(){dataLayer.push(arguments);}
  	gtag('js', new Date());
  	gtag('config', 'G-YEEY6XREQY');`




export function setGoogleAnalytics () {
	
	const sCDN = document.createElement("script");	
	sCDN.type = "text/javascript";
	sCDN.src = URI;
	sCDN.setAttribute("async", true);	
	document.body.appendChild (sCDN);
	
	const sMain = document.createElement("script");
	sMain.innerHTML = G_SCRIPT;
	document.body.appendChild (sMain);	
	
}