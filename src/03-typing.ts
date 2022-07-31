// el motor de inferencia te permite no usar la nueva sintaxis porque ya lo asume como tal, es decir para el primer caso
// let myProductName:string = "Product 1"; deberoa declararse de esta forma pero el motor ya lo asume como tipo string y lo respeta con tal, esta acotacion solo suceda para variable tipo let
(() => {

  let myProductName = "Product 1";
  let myProductPrice = 123;

  myProductName = "change";
  myProductName.toLowerCase();

  myProductPrice.toFixed();

  // en el caso de las constantes no dice que tipo de valor es solo dice el valor y ya porque se supone no deberia cambiar el mismo
  const myProducStock = 1000;

  const myProductName2 = "Product 1";
})()

