(() => {
  let myDynamicVar: any;

  myDynamicVar = 100;
  myDynamicVar = null;
  myDynamicVar = {};
  myDynamicVar = '';


  myDynamicVar = 'hola';
// esto se llama hacer un cast y esto quiere decir que se le esta asignando un tipo de variable a myDinamicVar en este caso puntual para que sea tratado como un string
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);


  const rta2 = ( <number> myDynamicVar).toFixed();
  console.log(rta2);

})()
