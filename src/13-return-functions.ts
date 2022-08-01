(() => {

  // en principio de la clase probamos de manera inferida y funciono perfectamente, sin embargo tambien se acoto de forma explicita, que el :number que esta luego de los parentesis es el tipo de dato que va a retornar nuestra funcion, por el contrario de lo que esta dentro del parentesis es el tipo de dato de sus paramentros
  const calcTotal = (prices: number[] ): string  => {
    let total = 0;

    prices.forEach((item) => {
      total += item;
    });

    return total.toString();
  }

  const rta = calcTotal([1,2,1,1,1]);
  console.log(rta);
// como en c++ el void en una funcion no retorna nada
  const printTotal = (prices: number[]): void => {
    const rta = calcTotal(prices);

    console.log(`El total es ${rta}`);

  }

  printTotal([2,3,4,5,6]);

})();
