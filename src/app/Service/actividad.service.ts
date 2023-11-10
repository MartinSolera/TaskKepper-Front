import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from '../model/actividad';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  private baseURL2 ="http://localhost:8080/api/act/actividad"; 


  constructor(private httpClient : HttpClient) { }

  getActividadesList(): Observable<Actividad[]> {
    return this.httpClient.get<Actividad[]>(`${this.baseURL2}`)
      .pipe(
        tap(data => console.log('Datos recibidos:', data)),
        catchError(error => {
          console.error('Error al obtener datos:', error);
          throw error; // Puedes manejar el error según tus necesidades
        })
      );
  }
}