import { Component, computed, signal } from '@angular/core';

const name = signal('Andrés Marin');

@Component({
  selector: 'app-counter-page',
  standalone: true,
  imports: [],
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.scss',
})
export class CounterPageComponent {

  // En Angular, un signal es una forma de manejar el estado reactivo de manera más eficiente. 
  // Los signals proporcionan una interfaz sencilla para el manejo de cambios de estado y permiten la reactividad de manera explícita.



  //Las señales no tienen que estar dentro de un componente.
  //Las señales tienen varios metodos para actualizar el valor.
  //El metodo update recibe una funcion que recibe el valor actual y retorna el nuevo valor.
  //El metodo set recibe el nuevo y lo asigna directamente.
  //El metodo value obtiene el valor actual del signal.

  // subscribe: Permite suscribirse a los cambios del signal.

  constructor() {
    console.log(name());
    
  }

  public counter = signal(10);
  //El computed es de solo lecutra, no se puede mopdificar y si va actualizar cuando el valor de la señal cambie.
  public squareCounter = computed(() => this.counter() * this.counter());

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
