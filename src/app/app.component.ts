import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle'; // Asegúrate de importar desde 'swiper/element/bundle'

register(); // Llama a la función de registro

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}
