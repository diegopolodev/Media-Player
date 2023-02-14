import Singleton from './Singleton';


//Para obetener una instancia tenemos que obtener getInstan
//El men
const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log('A es igual a B', a===b);


