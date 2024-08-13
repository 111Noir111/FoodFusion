import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  user = {
    name: '',
    email: '',
    phone: ''
  };

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    // Aquí puedes cargar la información del perfil del usuario
    this.loadUserProfile();
  }

  loadUserProfile() {
    // Simulación de carga de datos del perfil
    this.user = {
      name: 'Juan Pérez',
      email: 'juan.perez@example.com',
      phone: '+123456789'
    };
  }

  saveProfile() {
    // Aquí deberías implementar la lógica para guardar los cambios en el perfil
    console.log('Perfil guardado', this.user);
    // Puedes usar un servicio para guardar los datos en una base de datos o en el backend
  }
}
