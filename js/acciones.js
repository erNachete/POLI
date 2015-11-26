function suma(){
	puntos=puntos+tsumatorio;
}

function sumatemporal(){
	setInterval(suma, 1000);
}

function Operro(id){
	tsumatorio=1;
	puntos=Math.round((puntos-precio[1])*10)/10;
	precio[1]=Math.round(precio[1]+(precio[1]*0.5));
	precio[1]=precio[1]+(precio[1]*0.5);
	contador[1]++;
	accion="Ha comprado un "+nombres[1];
	mostrarpuntos();
	mostrarcompras();
	condiciones();
	sumatemporal();
	mostrarpuntostemporal();	
	guardar();
	imprimir();
	danoporclick();
}