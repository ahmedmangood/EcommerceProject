import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  signinForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signinForm = this.fb.group ({
      name: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      username: [null, [Validators.required, Validators.pattern(/^\S*$/)]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/)]],
      confirmPass: [null, [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/)]]
    });
  }

  get registerForm() {
    return this.signinForm.controls;
  }

  onFormClick() {
    let msg = document.getElementById('msg')
    msg?.classList.remove("invisible");
    msg?.classList.add("visible");
  }
}
