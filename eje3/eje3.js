
function startTime(){
today=new Date();
h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();
m=checkTime(m);
s=checkTime(s);
document.getElementById('reloj').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);}
function checkTime(i)
{if (i<10) {i="0" + i;}return i;}
window.onload=function(){startTime();}

var boton = document.getElementById("hora");
	boton.addEventListener("click", function() {

		 function calcTime(city, offset) {
    // creamos el objeto Date (la selecciona de la máquina cliente)
    d = new Date();
 
    // lo convierte  a milisegundos
    // añade la dirferencia horaria
    // recupera la hora en formato UTC
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
 
    // devuelve la hora como string.
    return  city + "  " + d.toLocaleString();
	};
	var resultado = document.getElementById("resultado");
		resultado.innerHTML = (calcTime("FRANCIA", "+6"));

});
