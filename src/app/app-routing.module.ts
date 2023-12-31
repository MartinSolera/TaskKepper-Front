import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteTaskComponent } from './Components/Task/update-task/delete-task/delete-task.component';
import { GeneratePDFComponent } from './Components/Task/update-task/generate-pdf/generate-pdf.component';
import { ListTaskComponent } from './Components/Task/update-task/list-task/list-task.component';
import { RegisterTaskComponent } from './Components/Task/update-task/register-task/register-task.component';
import { UpdateTaskComponent } from './Components/Task/update-task/update-task.component';
import { DateComponent } from './Components/Date/date.component';


const routes: Routes = [
  {path : "task", component:ListTaskComponent},
  {path:'',redirectTo:'task',pathMatch:'full'},
  {path: 'register-task',component : RegisterTaskComponent}, 
  {path: 'delete-task',component : DeleteTaskComponent},
  {path: 'pdf',component : GeneratePDFComponent},
  {path: 'update-task/:id', component: UpdateTaskComponent},
  {path: 'date', component: DateComponent}
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
