(() => {
  type UserID = string | number;
 let UserId : UserID;

 // Literal types
 type Sizes = 'S' | 'M' | 'L' | 'XL';
 let shirtSize: Sizes;
 shirtSize = 'M';
 shirtSize = 'L';
 shirtSize = 'XL';

 function greeting(myText: UserID, size: Sizes){

  if(typeof myText === "string"){
    myText.charAt(0);
    console.log(`string ${myText.toLowerCase()}`);
  }
  // else{
  //   myText.toFixed();
  //   console.log(`number ${myText.toFixed(1)}`);
  // }
  }

  greeting(1111, 'XL')
  greeting('1111', 'S')
  // en este caso nos da error porque este string no esta asignado en las posibles opciones que tiene la variable
  // shirtSize = 'lasdkljaskldjklasdjkl';

})()
