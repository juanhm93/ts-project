(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }



  const producto1 = createProductToJson('P1', new Date(), 12, "M");
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);
// en este caso la variable size aunque se le coloca la opcion de ser undefined en realidad no cumple la funcion que buscamos que es ser opcional pues debemos igual enviar el parametro en este caso como undefined.
// size: Sizes | undefined
// const producto2 = createProductToJson('P1', new Date(), 12, undefined);
// se definio de la forma que vemos arriba y en el ejemplo vamos a colocar la forma correcta, la que nos permite no pasar un parametro y que no nos genere las alertas.
  const createProductToJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) =>  {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto2 = createProductToJsonV2('P1', new Date(), 12);
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);
  console.log(producto2.size);

})();
