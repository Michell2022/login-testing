import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('testing');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('testing');
  });

  it('should ser inválido si se ingresan los datos incorrectos en el formulario', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formLogin;
    form.get('email')?.setValue('michell@gmail.c');
    form.get('password')?.setValue('123');

    expect(form.invalid).toBeTruthy();
  });

  it('should ser válido si se ingresan los datos correctos en el formulario', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();

    const form = component.formLogin;
    form.get('email')?.setValue('michell@gmail.com');
    form.get('password')?.setValue('123456');

    expect(form.valid).toBeTruthy();
  });


  it('should de mostrar email en la variable mensajeLogeado luego de presionar mi boton', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    fixture.detectChanges();
    const form = component.formLogin;
    const email = 'michell@gmail.com';
    const password = '123456';

    form.get('email')?.setValue(email);
    form.get('password')?.setValue(password);

    const button = fixture.debugElement.nativeElement.querySelector('.mybotonClass') as HTMLButtonElement;
    button.disabled = false
    button.click();

    expect(component.mensajeLogeado).toBe('michell@gmail.com');
  });

});
