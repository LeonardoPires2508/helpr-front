import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { Observable, EMPTY } from 'rxjs'
import{ catchError, tap } from 'rxjs/operators'
import { Token } from './../models/token';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  //Captura as credenciais
  public authenticate (credenciais: Credenciais): Observable<any> {
  // requisitar token de autorização
  //const baseUrl = "http://localhost:8080"; EXPORTADO PAZRA PASTA API CONFIG
  return this.http.post<Token>(`${API_CONFIG.baseUrl}/auth/login`, credenciais).pipe(
    tap(token => {
      localStorage.setItem("token", token.accessToken);
    }),
    catchError(error => {
      alert("Erro ao autenticar!");
      console.error(error);
      return EMPTY;
    })
    );
  // autenticar
  }
}
