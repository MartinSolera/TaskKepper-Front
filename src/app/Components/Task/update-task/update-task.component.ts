import { Component, OnInit } from '@angular/core';
import { Task } from '../../../model/task';
import { TaskService } from '../../../Service/task.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit{

  task : Task = new Task(); 
  idValue : number; 

  constructor(private taskService: TaskService, private router : Router, private route: ActivatedRoute){

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      
      const id = params.get('id'); 
      if(id != null){
        this.idValue = +id; 
      }
      

    })
  }

  onSubmit(){
    this.editTask();
  }

  editTask(){
    this.taskService.updateTask(this.idValue,this.task).subscribe(dato => {
        console.log(dato);
        this.goToListTask();
      });
  }

  saveTask(){
    this.taskService.registerTask(this.task).subscribe(dato => {
      console.log(dato);
      this.goToListTask(); 
    },error => console.log(error));
  }  

  goToListTask(){
    this.router.navigate(['/task']); 
  }
  

}



