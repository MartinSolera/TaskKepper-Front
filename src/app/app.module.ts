import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTaskComponent } from './Components/Task/list-task/list-task.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterTaskComponent } from './Components/Task/register-task/register-task.component'; 
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './Components/Task/update-task/update-task.component';
import { DeleteTaskComponent } from './Components/Task/delete-task/delete-task.component';
import { GeneratePDFComponent } from './Components/Task/generate-pdf/generate-pdf.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { DateComponent } from './Components/Date/date.component';
import { ListActividadesComponent } from './Components/Actividades/list-actividades/list-actividades.component';
import { AddActividadComponent } from './Components/Actividades/add-actividad/add-actividad.component';
import { DolarComponent } from './Components/Dolar/dolar.component';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    RegisterTaskComponent,
    UpdateTaskComponent,
    DeleteTaskComponent,
    GeneratePDFComponent,
    DateComponent,
    ListActividadesComponent,
    AddActividadComponent,
    DolarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
