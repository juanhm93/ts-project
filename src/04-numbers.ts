(() => {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);
  // esto es hacerlo de forma explicita, no deja que se infiera el dato, lo que quiere decir que el intuya cual es el tipo de dato y lo asigne
  let customerAge: number = 28;
  //customerAge = customerAge + "1"; // 281
  customerAge = customerAge + 1;
  console.log('customerAge', customerAge);
  // logicamente cuando no asignamos un valor a una variable el motor de inferencia no funciona y obligatoriamente hay que colocarlo explocito
  let productInStock: number;
  // estas seguro que la quieres imprimir si no a sido asignada es undefined
  console.log('productInStock', productInStock);

  if(productInStock > 10){
    console.log('is greater');
  }

  let discount = parseInt("123");
  // al convertir esta cadena en numero da NaN que sigue siendo un numero por ello typescript no da error
  // let discount = parseInt("sdasdasd");

  if(discount <= 200){
    console.log("apply")
  }else {
    console.log("not apply")
  }
  console.log("discount", discount)
  // transforma el en un decimal
  let hex = 0xfff;
  console.log("hex", hex);
  // identifica que es tipo binarion, y lo transforma en su output que corresponde al valor
  let bin = 0b1010;

  console.log("bin", bin);
  // no es correcto no tiparlo con el objecto de numeros sino con muniscula que es de tipo numero
  const myNumber: Number = 10;

})();
