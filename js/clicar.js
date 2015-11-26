function mostrarcompras(){
	texto1=nombres[0]+" "+contador[0];
	document.getElementById("comprasobjetos").innerHTML=texto1;
	texto2=nombres[1]+" "+contador[1];
	document.getElementById("comprasacciones").innerHTML=texto1;
}

function mostrarpuntos(){
	document.getElementById("cifraP").innerHTML=puntos;
}

function mostrarpuntostemporal(){
	setInterval(mostrarpuntos, 1000);
}

function sumaclick(){
	puntos=Math.round((puntos+sumatorio)*10)/10;
	mostrarpuntos();
}

function clicar(){
	sumaclick();
	condiciones();
}

function condiciones(){
	for(var i=0;i<precio.length;i++){
		if(puntos>=precio[i]){			
			mostrar(nombres[i]);
			document.getElementById(nombres[i]).value = nombres[i]+" "+precio[i]+" exp";
		}else{
			ocultar(nombres[i]);
		}
	}
}

function ocultar(id){
	document.getElementById(id).style.display = "none";
}

function mostrar(id){
	document.getElementById(id).style.display = "block";
	document.getElementById(id).style.textAlign = "center";
}

function danoporclick(){
	document.getElementById("fuerza").innerHTML= sumatorio+" exp/clc || "+tsumatorio+" exp/s";
}