import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';  // Importa Router
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  oApp = initializeApp(environment.firebaseConfig);
  oAuth = getAuth(this.oApp);

  email = "";
  password = "";
  errorMessage: string | null = null; // Para almacenar el mensaje de error

  constructor(
    public modalCtrl: ModalController,
    private router: Router // Agrega Router al constructor
  ) { }

  ngOnInit() {
  }

  loginUser(event: Event) {
    event.preventDefault(); // Evita el comportamiento predeterminado
    signInWithEmailAndPassword(this.oAuth, this.email, this.password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log('Usuario autenticado:', user);
        this.errorMessage = null; // Limpiar el mensaje de error
        await this.modalCtrl.dismiss(); // Cierra el modal
        this.router.navigate(['/tabs/home']).then(() => {
          console.log('Navegación exitosa');
        }).catch((error) => {
          console.log('Error en navegación:', error);
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Error en autenticación:', errorCode, errorMessage);
        // Asignar un mensaje de error amigable para el usuario
        this.errorMessage = this.getErrorMessage(errorCode);
      });
  }
  
  async dismiss() {
    await this.modalCtrl.dismiss();
  }

  private getErrorMessage(errorCode: string): string {
    switch (errorCode) {
      case 'auth/invalid-email':
        return 'El formato del correo electrónico es incorrecto.';
      case 'auth/user-not-found':
        return 'El correo electrónico no está registrado.';
      case 'auth/wrong-password':
        return 'La contraseña es incorrecta.';
      default:
        return 'Error desconocido. Inténtelo de nuevo.';
    }
  }
}
