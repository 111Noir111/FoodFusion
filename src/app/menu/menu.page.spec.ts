import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page'; // Asegúrate de que el nombre del componente sea correcto

describe('MenuPage', () => { // Cambia el nombre del componente a MenuPage
  let component: MenuPage;
  let fixture: ComponentFixture<MenuPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuPage ], // Usa MenuPage en lugar de MainComponent
      imports: [IonicModule.forRoot()] // Asegúrate de importar IonicModule
    }).compileComponents();

    fixture = TestBed.createComponent(MenuPage); // Usa MenuPage en lugar de MainComponent
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
