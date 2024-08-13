import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomeRoutingModule } from './home-routing.module'; // Usa el nombre correcto aquí
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeRoutingModule // Asegúrate de usar el nombre correcto aquí
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
