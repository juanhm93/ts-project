(() => {
  let UserId: number | string;

  UserId = 123;
  UserId = "asasd";

  // es recomendado soportar de 2 a 3 tipos de datos maximo

  function greeting(myText: string | number){
    // con esta sentencia el tipado es dinamico, es decir dentro del scope de la condicion solo va a entrar el tipo de dato definido en la condicion
    if(typeof myText === "string"){
      myText.charAt(0);
      console.log(`string ${myText.toLowerCase()}`);
    }else{
      myText.toFixed();
      console.log(`number ${myText.toFixed(1)}`);
    }
  }

  greeting("aasdasd");
  greeting(12.3123);
  // greeting(null);
  // greeting({});


})()
