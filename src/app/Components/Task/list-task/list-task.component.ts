import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../../model/task';
import { TaskService } from '../../../Service/task.service';
import { ChangeDetectorRef } from '@angular/core';
import { delay } from 'rxjs';
import Swal from 'sweetalert2';


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
      console.log("los datos son: " + this.taskArray[0]);
      
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
    Swal.fire({
      title: '¿Estás seguro de que quieres borrar todas las tareas?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.taskService.deleteAllTasks().subscribe(
          () => {
            this.getDatos();
            this.cdr.detectChanges();
            Swal.fire('Todas las tareas han sido borradas', '', 'success');
          },
        );
      }
    });
  }
  














  addTask() {
    this.router.navigate(['register-task']);
  }

  generatePdf(){
    window.open('/pdf', '_blank');
  }

  toggleComplete(task: Task) {
    task.completed = !task.completed;
  }


}


