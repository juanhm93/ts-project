(() => {
  let productTitle = "My amazing product";
  // generar errores
  // productTitle = null;
  // productTitle = () => {};
  // productTitle = 123

  productTitle = "I'm  amazing product changed";
  console.log('productTitle', productTitle);

  const productDescription = 'bla bla bla bla asdsad';
  console.log('productDescription', productDescription);

  let productPrice = 100;
  let isNew: boolean = false;
  // interpolacion de string, back tick's
  // uso de agrupar variables y utilizar varias lineas
  const summary = `
  title: ${productTitle}
  description: ${productDescription}
  price: ${productPrice}
  isNew: ${isNew}
  `;
  console.log(summary);

  // mala practica una vez mas usar String

  let myString: String = "";
})()
