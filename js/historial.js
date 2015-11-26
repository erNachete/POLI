function guardar(){
	historial[contadoracciones]=(contadoracciones+1)+" "+accion;
	contadoracciones++;
}

function imprimir(){
	
	var x=historial.sort(function(a, b){return a-b});
	document.getElementById("textohistorial").innerHTML = x.join("\n");
}
