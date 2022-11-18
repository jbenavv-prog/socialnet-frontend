import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit() {
 if (this.form.valid) {
  console.log('Formulario Valido');
  console.log(this.form.value);
 }
 else {
  console.log('Formulario Inválido');

 }
  }
}
