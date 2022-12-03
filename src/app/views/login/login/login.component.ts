import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Credenciais } from 'src/app/models/credenciais';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin: FormGroup;

  constructor(formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
    ) {
    this.formLogin  = formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      senha: ["", Validators.required]
    });
  }

  ngOnInit(): void {
  }

  public signIn(): void {
    if(this.formLogin.valid){
      //Porcesso de autenticar
      const credenciais: Credenciais = this.formLogin.value;
      this.authService.authenticate(credenciais).subscribe(response => {
        alert("Ben-vindo(a)!");
        this.router.navigate(["/home"]);
      });
    } else {
      alert("Dados inválidos!")
    }
  }

}
