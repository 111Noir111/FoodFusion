import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.page.html',
  styleUrls: ['./diario.page.scss'],
})
export class DiarioPage implements OnInit {

  // Lista de comidas consumidas
  comidas = [
    { nombre: 'Manzana', cantidad: 2 },
    { nombre: 'Sándwich', cantidad: 1 },
    { nombre: 'Yogur', cantidad: 1 },
    { nombre: 'Ensalada', cantidad: 1 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
