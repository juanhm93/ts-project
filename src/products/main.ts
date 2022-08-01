import {addProduct, calcStock,products} from './product.service';

addProduct({
  title: 'Product 1',
    createdAt: new Date(),
    stock: 12,
    size: 'L'
})
addProduct({
  title: 'Product w',
    createdAt: new Date(),
    stock: 12,
    size: 'M'
})

console.log(products);

const total = calcStock();
console.log(total);
