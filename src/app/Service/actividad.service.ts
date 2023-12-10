import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Actividad } from '../model/actividad';
import { tap, catchError } from 'rxjs/operators';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  private baseURL2 = "http://localhost:8080/api/act/actividad";
  private baseURL3 = "http://localhost:8080/api/act/createactividad";
  private CALCULATEDDATE = "http://localhost:8080/api/act/fechas/calculate-inicio1"


  constructor(private httpClient: HttpClient) { }

  fechaInicio: number;
  calculatedDays: number;

  ngOnInit() {
    
  }

  getActividadesList(): Observable<Actividad[]> {
    return this.httpClient.get<Actividad[]>(`${this.baseURL2}`)
      .pipe(
        tap(data => {
          data.forEach(actividad => {
            this.getcalculatedDays(actividad.fechaInicio).subscribe(
              data => {
                actividad.result = data;
              }
            )
            actividad.result = this.calculatedDays;
            
          });
        }),
        catchError(error => {
          console.error('Error al obtener datos:', error);
          throw error; 
        })
      );
  }

  deleteActividad(id: number): Observable<Actividad> {
    return this.httpClient.delete<Actividad>(`${this.baseURL2}/${id}`);
  }

  addActividad(actividad: Actividad): Observable<Object> {
    return this.httpClient.post(`${this.baseURL3}`, actividad);
  }

  getcalculatedDays(fechaInicio : Date): Observable<number> {
    return this.httpClient.get<number>(`${this.CALCULATEDDATE}/${fechaInicio}`)
  }


}
