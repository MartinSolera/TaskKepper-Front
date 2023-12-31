import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTaskComponent } from './Components/Task/update-task/list-task/list-task.component';
import {HttpClientModule} from '@angular/common/http';
import { RegisterTaskComponent } from './Components/Task/update-task/register-task/register-task.component'; 
import { FormsModule } from '@angular/forms';
import { UpdateTaskComponent } from './Components/Task/update-task/update-task.component';
import { DeleteTaskComponent } from './Components/Task/update-task/delete-task/delete-task.component';
import { GeneratePDFComponent } from './Components/Task/update-task/generate-pdf/generate-pdf.component';
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


@NgModule({
  declarations: [
    AppComponent,
    ListTaskComponent,
    RegisterTaskComponent,
    UpdateTaskComponent,
    DeleteTaskComponent,
    GeneratePDFComponent,
    DateComponent
    
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
    MatNativeDateModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
