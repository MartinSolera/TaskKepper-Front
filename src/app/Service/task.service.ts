import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';
import Swal from 'sweetalert2';

///Probando git
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //Esta URL obtiene el listado de todas las task
  private baseURL = "/api/tasks";

  private baseURL2 ="http://localhost:8080/api/tasks"; 
  private baseURL3 ="http://localhost:8080/api/task";
  private deleteAllURL = "http://localhost:8080/api/tasks/deleteAll"; 
  private URLtaskById = "http://localhost:8080/api/task"; 

  constructor(private httpClient : HttpClient) {  }

  obtenerListaEmpleados():Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${this.baseURL2}`); 
  }

  registerTask(task : Task) : Observable<Object>{
    if(task.name != null){
      return this.httpClient.post(`${this.baseURL2}`,task); 
    }else {
      Swal.fire(
        'No completaste correctamente los datos',
        '',
        'info'
      );
      return new Observable<Object>(observer => {


        observer.error("La tarea no puede ser nula");
      });
    }
  }

  deleteTask(id:number):Observable<Task>{
    return this.httpClient.delete<Task>(`${this.baseURL2}/${id}`); 
  }

  updateTask(id:number, task:Task):Observable<Object>{
    return this.httpClient.put(`${this.baseURL3}/${id}`,task); 
  }

  deleteAllTasks():Observable<Object>{
    return this.httpClient.delete(`${this.deleteAllURL}`); 
  }

  getTaskById(id:number):Observable<Task>{
    return this.httpClient.get(`${this.URLtaskById}/${id}`) as Observable<Task>;
  }

}
