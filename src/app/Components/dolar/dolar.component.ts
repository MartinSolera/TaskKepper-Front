import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DolarService } from 'src/app/Service/dolar.service';
import { Dolar } from 'src/app/model/dolar';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent {
    dolarList : Dolar[] = []; 

    constructor(
      private dolarService : DolarService,
      private router : Router) { }


    ngOnInit(): void{
      this.getDatos(); 
    }


    getDatos(){
      this.dolarService.getAll().subscribe(
        data => {
          this.dolarList = data; 
          console.log("Los datos son:", this.dolarList);   
        }, 
        error => {
          console.log("Error al obtener los datos:", error);
        }
      )
    }
}
