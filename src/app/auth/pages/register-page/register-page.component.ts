import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '@auth/services/auth.service';
import { AlertService } from 'src/app/shared/alerts/alert.services';
import { FormUtils } from 'src/app/shared/utils/form-utils';

@Component({
  selector: 'app-register-page',
  imports: [RouterLink, ReactiveFormsModule],
  standalone: true,
  templateUrl: './register-page.component.html',
})
export class RegisterPageComponent {
  authService = inject(AuthService);
  alert = inject(AlertService);
  fb = inject(FormBuilder);
  router = inject(Router);
  formUtils = FormUtils;

  registerForm = this.fb.group({
    emailR: ['', [Validators.required, Validators.email]],
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$'),
      ],
    ],
    password2: ['', [Validators.required, Validators.minLength(6)]],
  });

  onSubmit() {
    if (this.registerForm.invalid) {
        this.registerForm.markAllAsTouched();
      return;
    }

    if (
      this.registerForm.value.password !== this.registerForm.value.password2
    ) {
      this.alert.error('Las contraseñas no coinciden');
      return;
    }

    const {
      emailR = '',
      password = '',
      fullName = '',
    } = this.registerForm.value;

    this.authService
      .signUp({ email: emailR!, password: password!, fullName: fullName! })
      .subscribe((isAuthenticated) => {
        if (isAuthenticated) {
          this.router.navigateByUrl('/favorites');
          return;
        }
        this.alert.error('Verifique la información');
      });
  }
}
