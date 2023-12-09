import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActividadService } from 'src/app/Service/actividad.service';
import { Actividad } from 'src/app/model/actividad';

@Component({
  selector: 'app-add-actividad',
  templateUrl: './add-actividad.component.html',
  styleUrls: ['./add-actividad.component.css']
})
export class AddActividadComponent implements OnInit{

  actividad : Actividad = new Actividad(); 
  constructor(private actividadService : ActividadService, private router :  Router){

  }

  ngOnInit(): void { 
  }

  saveActividad(){
    this.actividadService.addActividad(this.actividad).subscribe(dato => {
      console.log(dato);
      this.goToListTask(); 
    },error => console.log(error));
  }

  goToListTask(){
    this.router.navigate(['/actividad']); 
  }

  onSubmit(){
    this.saveActividad();  
  }

}
