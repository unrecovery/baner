var mensaje = ["Fb.com/lordmegatronxp", "ig.com/lordmegratronxd"];

var punto = 0;

function cambiaTexto() {
  $("#texto").html(mensaje[punto]);
  if (punto < mensaje.length - 1) {
    punto++;
  } else {
    punto = 0;
  }
  setTimeout(cambiaTexto, 7000);
}

cambiaTexto();
