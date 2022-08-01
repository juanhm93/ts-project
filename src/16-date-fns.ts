 import { subDays, format } from 'date-fns';

const date = new Date(1998, 1, 28); // 0 = enero, 1 = febrero

const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);
// cuando vemos que alguna libreria no tiene import y export puedes ser una guia para saber que no posee resolucion de modulo actual, esto nos debe alertar de que no tiene soporte alguno de typescript es lo mas probable y hay que adaptarlo para poder utilizar
