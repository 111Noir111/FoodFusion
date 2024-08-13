import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MenuRoutingModule } from './menu-routing.module';
import { MenuPage } from './menu.page'; // Asegúrate de que la ruta sea correcta

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRoutingModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
