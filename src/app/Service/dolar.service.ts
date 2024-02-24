import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dolar } from '../model/dolar';
import { HttpClient } from '@angular/common/http';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class DolarService {

  private baseURL = "https://dolarapi.com/v1/dolares"
  private urlFiltered = "http://localhost:8080/api/dolar/filtered"
  

  constructor(private httpClient : HttpClient) { }


  getAll():Observable<Dolar[]>{
    return this.httpClient.get<Dolar[]>(`${this.baseURL}`); 
  }

  getDevicesFiltered():Observable<Dolar[]>{
    return this.httpClient.get<Dolar[]>(`${this.urlFiltered}`);
  }
}
