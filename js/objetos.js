function Oporra(id){
	sumatorio=Math.round((sumatorio+(sumatorio*0.5))*10)/10;
	puntos=Math.round((puntos-precio[0])*10)/10;
	precio[0]=Math.round(precio[0]+(precio[0]*0.5));
	contador[0]++;
	accion="Ha comprado un "+nombres[0];
	mostrarpuntos();
	mostrarcompras();	
	condiciones();
	guardar();
	imprimir();
	danoporclick();
}