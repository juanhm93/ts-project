(() => {
  // const login = (email: string, password: string) => {
  //   console.log(email,password);
  // }

  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const login = (data: {email: string, password: number}) => {
    console.log(data.email,data.password);
  }

  // login("juanhm93@gmail.com","123123123");
  login({
    email: "juanhm93@gmail.com", password: 123123123
  });
const products: any[] = [];


  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data)
  }

  addProduct({
    title: 'Product 1',
    createdAt: new Date(),
    stock: 12,
    size: 'L'
  })
  console.log(products)
})()
