import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cliente } from 'src/app/models/cliente';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/clientes`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de clientes");
        console.log(error);
        return EMPTY;
      })
    );
  }

  public create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${API_CONFIG.baseUrl}/clientes`, cliente).pipe(
      catchError(error => {
        alert("Error ao criar novo cliente!");
        console.error(error);
        return EMPTY;
      })
    )
  }
}
