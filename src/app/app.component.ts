import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from './directivas/email-validator.directive';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'testing';

  mensajeLogeado = "";
  mensaje = false;
  inputEmail = "";
  inputPass = "";
  public formLogin!: FormGroup;


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(250),
          emailValidator()
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(4)
        ]
      ]
    })
  }

  get email() {
    return this.formLogin.get('email')!;
  }

  get password() {
    return this.formLogin.get('password')!;
  }

  public validate(): void {
    if (this.formLogin.invalid) {
      for (const control of Object.keys(this.formLogin.controls)) {
        this.formLogin.controls[control].markAsTouched();
      }
      return;
    } else if (this.formLogin.valid) {
      this.mensaje = true;

      this.mensajeLogeado = this.formLogin.get('email')?.value;
      // this.formLogin.reset();
    }
  }

}
