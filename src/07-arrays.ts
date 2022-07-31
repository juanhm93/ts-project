(() => {
  // tipo de datos number[] pero con corchetes de que es un arreglo
  // let prices = [1,2,2,1,1,1,212];


  // tipo de dato para este caso puede ser (strign | number | boolean) [] pero con corchetes de que es un arreglo
  let prices = [1,2,2,1,1,1,212,"123", true];
  // errors
  // prices.push("sadsd");
  // prices.push(123);
  // prices.push({});


  // validos
    prices = [1,2,3];
    prices.push(123);


    let products = ["123", true];
    // error
    // products.push(123);

    let mixed: (string | number | boolean)[] = ["hola buenas", true];
    // ahora si es valido porque esta definido entre los permitidos
    mixed.push(12)
  // se puede por ahora si vamos a trabajar con objectos trabajarlos de esta forma aunque hya qye tener en cuenta que la prevencion de error no es tan especifica pues esto es muy premisivo
    let mixeding: (string | number | boolean | Object)[] = ["hola buenas", true];
    mixeding.push({});
    mixeding.push([]);


    let numbers = [1,2,2,1,1,1,212];

    numbers.map(item => item * 2);
    

})()
