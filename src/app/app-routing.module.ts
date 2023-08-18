import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteTaskComponent } from './delete-task/delete-task.component';
import { GeneratePDFComponent } from './generate-pdf/generate-pdf.component';
import { ListTaskComponent } from './list-task/list-task.component';
import { RegisterTaskComponent } from './register-task/register-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';


const routes: Routes = [
  {path : "task", component:ListTaskComponent},
  {path:'',redirectTo:'task',pathMatch:'full'},
  {path: 'register-task',component : RegisterTaskComponent}, 
  {path: 'delete-task',component : DeleteTaskComponent},
  {path: 'pdf',component : GeneratePDFComponent},
  {path: 'update-task/:id', component: UpdateTaskComponent}
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
