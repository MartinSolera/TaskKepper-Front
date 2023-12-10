import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActividadService } from 'src/app/Service/actividad.service';
import { DateService } from 'src/app/Service/date.service';
import { Actividad } from 'src/app/model/actividad';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-actividades',
  templateUrl: './list-actividades.component.html',
  styleUrls: ['./list-actividades.component.css']
})
export class ListActividadesComponent {
  actividadesArray: Actividad[] = [];
  displayedColumns: string[] = ['descripcion', 'fechaInicio','fechaFin', 'result', 'acciones'];

  selectedDate : Date; 
  pruebaValor : number;
  resultDate : number; 

  constructor(
    private actividadService: ActividadService,
    private dateService : DateService,
    private router: Router,
    private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.getDatos();
  }


  getDatos() {
    this.actividadService.getActividadesList().subscribe(
      data => {
        this.actividadesArray = data;
        console.log('Los datos son:', this.actividadesArray);
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
  
  


  deleteActividad(id : number){
    console.log("ID a eliminar:", id); 
    this.actividadService.deleteActividad(id).subscribe(data => {
        this.getDatos(); 
    })
  }

  addActividad(){
    this.router.navigate(['add-actividad']);
  }


}
