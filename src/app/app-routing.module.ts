import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteTaskComponent } from './Components/Task/delete-task/delete-task.component';
import { GeneratePDFComponent } from './Components/Task/generate-pdf/generate-pdf.component';
import { ListTaskComponent } from './Components/Task/list-task/list-task.component';
import { RegisterTaskComponent } from './Components/Task/register-task/register-task.component';
import { UpdateTaskComponent } from './Components/Task/update-task/update-task.component';
import { DateComponent } from './Components/Date/date.component';
import { ListActividadesComponent } from './Components/Actividades/list-actividades/list-actividades.component';
import { AddActividadComponent } from './Components/Actividades/add-actividad/add-actividad.component';
import { DolarComponent } from './Components/dolar/dolar.component';


const routes: Routes = [
  {path : "task", component:ListTaskComponent},
  {path:'',redirectTo:'task',pathMatch:'full'},
  {path: 'register-task',component : RegisterTaskComponent}, 
  {path: 'delete-task',component : DeleteTaskComponent},
  {path: 'pdf',component : GeneratePDFComponent},
  {path: 'update-task/:id', component: UpdateTaskComponent},
  {path: 'date', component: DateComponent},
  {path: 'actividad', component: ListActividadesComponent},
  {path: 'add-actividad', component: AddActividadComponent},
  {path: 'dolar', component: DolarComponent}
 

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
