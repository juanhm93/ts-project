(async ()=> {
  const myCart = [];
  const products = [];
  const limit = 2;

  async function getProducts() {
    const rta = await fetch('http://api.escuelajs.co/api/v1/products', {
      method: 'GET'
    });
    const data = await rta.json();
    products.concat(data);
  }
  function getTotal() {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
      total += products[i].prize;
    }
    return total;
  }
  function addProduct(index) {
    if (getTotal() <= limit) {
      myCart.push(products[index]);
    }
  }

  await getProducts();
  addProduct(1);
  addProduct(2);
  const total = getTotal();
  console.log(total);
  const person = {
    name: 'Nicolas',
    lastName: 'Molina'
  }
  // const rta = person +  limit;
  // console.log(rta);
});

// comandos para transpilar en ts
// con este comando se transpila automaticamente a la version es3
// npx tsc src/demo.ts
// con la bandera target adicional pódemos elegir la version ECMASCRIPT que queremos arroje la salida
// npx tsc src/demo.ts  --target es6
// con la bande outDir decimos a donde queremos arrojar las salidas compiladas, en este caso a la carpeta dist
// npx tsc src/demo.ts  --target es6 --outDir dist
// con el asteriste en src compila todos los archivos ts que esten en esa carpeta
// npx tsc src/*.ts  --target es6 --outDir dist
// con node corremos los archivos que se crean
// node dist/01-hello.js


// clase 6 generar TSConfing
// npx tsc --init
