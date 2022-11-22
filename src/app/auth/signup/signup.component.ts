import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  form = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Formulario Valido');
      console.log(this.form.value);
      this.authService.signup(this.form.value).subscribe({
        next: (data) => {
          console.log(data);
          this.router.navigate(['../login'])
        },
        error: (err) => {
          console.log(err);
        },
      });
    } else {
      console.log('Formulario Inválido');
    }
  }
}
