var teclas = { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39 };

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = docuemt.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 100, 100, 200, 200, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var color1 ="blue";
  var movimiento = 10;
  switch (evento.keyCode)
  {
    case teclas.UP:
dibujarLinea(color1, x, y, x, y - movimiento, papel );
y = y - movimiento;
     console.log("arriba");
     break;
     case teclas.DOWN:
 dibujarLinea(color1, x, y, x, y + movimiento, papel );
 y = y + movimiento;
      console.log("abajo");
      break;
      case teclas.RIGHT:
  dibujarLinea(color1, x, y, x, y + movimiento, papel );
  y = y + movimiento;
       console.log("derecha");
       break;
      case teclas.LEFT:
  dibujarLinea(color1, x, y, x, y - movimiento, papel );
  y = y - movimiento;
       console.log("izquierda");
        break;
    default:
    console.log("otra tecla");
    break;
  }
}
