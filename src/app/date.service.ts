import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  private fechabaseURL = "http://localhost:8080/api/fechas"

  constructor(private httpClient : HttpClient) { }

  calculateDays(fecha: string):Observable<number>{
    return this.httpClient.get<number>(`${this.fechabaseURL}/${fecha}`);
  }

}
