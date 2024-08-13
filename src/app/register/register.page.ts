import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    public modalCtrl: ModalController,
    private fb: FormBuilder
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      // Procesar el formulario
      console.log('Formulario válido:', this.registerForm.value);
      await this.dismiss();
    } else {
      console.log('Formulario inválido');
    }
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
