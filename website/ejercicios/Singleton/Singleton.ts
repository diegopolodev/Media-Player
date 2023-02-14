//Singleton tiene 3 propiedas
//1. Instancia que es privada, estatica
class Singleton{    
    private static instance: Singleton;
    
    private constructor() {
        //init inicializacion

    } // su constructor es privado 
    static getInstance() { //get instance es un metodo estatico. Para obtener su instancia
       if(!Singleton.instance) {//se tiene que enviar la misma instancia  
        Singleton.instance = new Singleton()
        }

        return Singleton.instance;
    }
}
        

export default Singleton;