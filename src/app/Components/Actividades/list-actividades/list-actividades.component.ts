import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActividadService } from 'src/app/Service/actividad.service';
import { Actividad } from 'src/app/model/actividad';

@Component({
  selector: 'app-list-actividades',
  templateUrl: './list-actividades.component.html',
  styleUrls: ['./list-actividades.component.css']
})
export class ListActividadesComponent {
  actividadesArray: Actividad[] = [];
  displayedColumns: string[] = ['descripcion', 'fechaInicio','fechaFin','acciones'];

  constructor(
    private actividadService: ActividadService,
    private router: Router,
    private cdr: ChangeDetectorRef) { }


  ngOnInit(): void {
    this.getDatos();
  }

  getDatos(){
    this.actividadService.getActividadesList().subscribe(dato => {
      this.actividadesArray = dato; 
      console.log("Los datos son: " + this.actividadService);
      
    })
  }

  deleteActividad(id : number){
    console.log("ID a eliminar:", id); // Agregar este console.log

    this.actividadService.deleteActividad(id).subscribe(data => {
        this.getDatos(); 
    })
  }

  
  addActividad(){
    this.router.navigate(['add-actividad']);
  }
  

}
