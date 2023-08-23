import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../model/task';
import { TaskService } from '../task.service';
import { ChangeDetectorRef } from '@angular/core';
import { delay } from 'rxjs';


@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit{

  taskArray : Task[]; 
  displayedColumns: string[] = ['nombre', 'descripcion', 'acciones'];
  

  constructor(private taskService : TaskService, 
              private router:Router,
              private cdr: ChangeDetectorRef){ }


  ngOnInit(): void {
    this.getDatos(); 
  }

   getDatos(){
    this.taskService.obtenerListaEmpleados().subscribe(dato => {
      this.taskArray = dato;
    });
  }

   updateTask(id:number, task:Task){
    this.taskService.updateTask(id, task).subscribe(dato => {
    });
  }

   deleteTask(id:number){
    this.taskService.deleteTask(id).subscribe(data => {
      this.getDatos();
    })
  }

  goToUpdateTask(taskId: number) {
    this.router.navigate(['update-task', taskId]); 
  }


  deleteAllTasks(): void {
    const userConfirmed = window.confirm("¿Estás seguro de que quieres borrar todas las tareas?");
  
    if (userConfirmed) {      
      this.taskService.deleteAllTasks().subscribe(
        () => {
          console.log("Delete All completed");
          this.getDatos();
          this.cdr.detectChanges();
        },
        error => {
          console.error("Error deleting all tasks:", error);
        }
      );
    } else {
      console.log("Operación de borrado cancelada por el usuario.");
    }
  }
}


