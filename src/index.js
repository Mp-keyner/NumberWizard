// Importa las funciones de las hojas de funciones
import { dividir } from './operations/division';
import { sumar } from './operations/addition';
import { multiplicar } from './operations/multiplication';
import { power } from './operations/power';
import { restar } from './operations/subtraction';


// Exporta las funciones como un objeto
export default {
  sumar,
  restar,
  multiplicar,
  dividir,
  power
};
