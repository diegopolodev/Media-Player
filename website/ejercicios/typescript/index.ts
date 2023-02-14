//Type script comprende que es un bolean 
let muted = true
//Tambien podemos ser explicitos
let muted2: boolean = true
muted2 = false //Cuanto tratamos de escribnir algo que no corresponda a un boolean, error
//Numeros
let numerador = 42;
let denominador = 6;
let resultado = numerador/denominador
//console.log(resultado);

//String
let nombre: string = "Diego";
let saludo: string = `Hola soy ${nombre} `
//Arrays: en typeScript todos los arreglos deben ser de un solo tipo, a diferencias de js
let people: string[] = [];
people = ["Isabel", "Nicole", "Raul"]
people.push("9000"); //solo admite strings

//pero tambien se puede un arreglo de string y numeros
let peopleAndNumbers:Array<string | number> = [];
peopleAndNumbers.push("Diego")
peopleAndNumbers.push(9001)

//Enum, que es color y los enumera asignandole un numero 
enum Color {
    Rojo = "rojo",
    Verde = "verde",
    Azul = "azul", 
}

let colorFavorito: Color = Color.Azul
console.log(`Mi Color es ${colorFavorito}`);

//Any se utiliza cuando no se sabe el tipo de dato
let comodin: any = "Joker";
comodin = {type: "Wildcard"}

//Object
let someObject = {type:"Wildcard"};

//Funciones

function add(a: number, b: number): number{
    return a + b;
}

const sum = add(4,6);


//funcioones que regresan otras funciones
//Creador de sumas

function createAdder (a:number) {
    return function (b: number) {
        return b + a;
    }
}

const  addFour = createAdder(4);
const fourPlus6 = addFour(6);

//funcion que escribe el nombre completo de alguien 
function fullName(firstName: string, lastName?: string) {// se pone el interrogante para indicar que el dato es opcional
    return `${firstName} ${lastName}`;
}
const Diego = fullName("Diego", "Polo");

//Interfaces se utiliza la palabra reservada interface, este es un tipo


interface Rectangulo {
    ancho: number
    alto: number,
    color?: Color, 
}

let rect: Rectangulo = { //el sistema sabe que es un rectanghualo    
    ancho:4,
    alto:6,
};

function area (r: Rectangulo) {
    return r.alto * r.ancho;
}

const areaRect = area(rect)
console.log(areaRect);

rect.toString = function() {
    return this.color ? `Unrectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString());






