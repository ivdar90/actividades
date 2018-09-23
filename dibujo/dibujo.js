var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 500;
var l = 0;
var yi, xf;
var colorcito = "#FAA";

for(l = 0; l < lineas; l++)
{
  yi = 10 * l;
  xf = 10 * (l+1);
  dibujarlinea(colorcito, 0, yi, xf, 500);
  console.log("linea " +1);
}

dibujarlinea(colorcito, 1,1,1,499);
dibujarlinea(colorcito, 1,499,499,499);

function dibujarlinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
