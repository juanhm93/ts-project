(() => {
// esta prueba da error para demostrar que ninguno de los 2 esta definido entre en conjunto de valores permitidos, por lo que eso quiere decir que son su propio tipo de datos.
  // let myNumber: number = undefined;
  // let myString: string = null;
// cual le asignamos ese valor podemos ver que la inferencia los hace de tipo any
  let myNull  = null;
  let myUndefined = undefined;
// para este caso si cada quien tiene su tipo asignado unicamente
  let myNull2: null = null;
  let myUndefined2:undefined = undefined;

  let myNumber: number | null = null;

  myNumber = 12;

  let myString: string | undefined = myUndefined;

  myString = 'asdasdasd';

  function hi(name: string | null){
    let hello = 'Hola ';
    if(name) {
      hello += name;
    }else {
      hello += 'nobdy';
    }
    console.log(hello);
  }
  function hiV2(name: string | null){
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody';

    console.log(hello);
  }


  hi('nicolas');
  hi(null);
  hiV2('nicolas');
  hiV2(null);
})();
