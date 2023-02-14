interface Observer {
  update: (data: any) => void;//los observe van a obtener un metodo update, any es cualquiera, void es undefine
}

interface Subject { //Interface nos permite declarar la forma que tiene un objeto, se define sus tipos y su propiedades
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}


class BitcoinPrice implements Subject { //crea una clase  que va a implementar subject, cambia los cambios de precio
  observers: Observer[] = []; //este es el array de la insta que comienza vacia

  constructor() {
    const el: HTMLInputElement = document.querySelector('#value');
    el.addEventListener('input', () => {
      this.notify(el.value);
    });
  }

  subscribe(observer: Observer) { // es una clase publica que recibe un observe
    this.observers.push(observer); //la clase subscribe recibe y a;ade a una lista de subscriptores y hacemos push al observe
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex(obs => {//sirve para encontrar en que lista se encuenta 
      return obs === observer;
    });

    this.observers.splice(index, 1);
  }//con esto sacamos al observe de la lista de observers

  notify(data: any) { //Cuando el precio cambie hay que notificar 
    this.observers.forEach(observer => observer.update(data));//tenemso que notificar a todos los observer que son los suscriptores
  }
}

class PriceDisplay implements Observer {
  private el: HTMLElement;

  constructor() {
    this.el = document.querySelector('#price');
  }

  update(data: any) {
    this.el.innerText = data;
  }
}

const value = new BitcoinPrice();
const display = new PriceDisplay();

value.subscribe(display);

setTimeout(() => value.unsubscribe(display), 5000);
