// no hay alcance en el scope de este proyecto por lo que salta el error de declaracion de variables escritas de la misma forma que en el archivo 03=typing.ts, para evitar el error en es otro archivo se agrego una funcion anonima autoejecutada que tiene la estructura siguiente
// (() => {})();
// esta estructura de cuerpo funcionara en los ejemplos para no chocar el alcance de cada archivo
(() => {
  let myProductName = "Product 1";
  let myProductPrice = 123;
})();
