import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule, ModalController } from '@ionic/angular';
import { WelcomePage } from './welcome.page';
import { LoginPage } from '../login/login.page';
import { RegisterPage } from '../register/register.page';

class MockModalController {
  create() {
    return Promise.resolve({
      present: () => Promise.resolve(),
      dismiss: () => Promise.resolve()
    } as any);
  }
}

describe('WelcomePage', () => {
  let component: WelcomePage;
  let fixture: ComponentFixture<WelcomePage>;
  let modalController: ModalController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomePage ],
      imports: [IonicModule.forRoot()],
      providers: [
        { provide: ModalController, useClass: MockModalController }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(WelcomePage);
    component = fixture.componentInstance;
    modalController = TestBed.inject(ModalController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call modalController.create on login()', async () => {
    const spy = spyOn(modalController, 'create').and.callThrough();
    await component.login();
    expect(spy).toHaveBeenCalledWith({
      component: LoginPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'login-modal',
    });
  });

  it('should call modalController.create on register()', async () => {
    const spy = spyOn(modalController, 'create').and.callThrough();
    await component.register();
    expect(spy).toHaveBeenCalledWith({
      component: RegisterPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'register-modal',
    });
  });
});
