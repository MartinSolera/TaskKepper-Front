import { Component, OnInit } from '@angular/core';
import { DolarService } from 'src/app/Service/dolar.service';
import { Dolar } from 'src/app/model/dolar';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.component.html',
  styleUrls: ['./dolar.component.css']
})
export class DolarComponent implements OnInit {
  dolarList: Dolar[] = [];
  dolarRows: Dolar[][] = [];

  constructor(private dolarService: DolarService) {}

  ngOnInit(): void {
    this.getDatos();
  }

  getDatos() {
    this.dolarService.getAll().subscribe(
      data => {
        this.dolarList = data;
        console.log("Los datos son:", this.dolarList);
        this.groupDolars();
      },
      error => {
        console.log("Error al obtener los datos:", error);
      }
    );
  }

  groupDolars() {
    const itemsPerRow = 3; // Puedes ajustar según el número de elementos que desees por fila
    this.dolarRows = [];

    for (let i = 0; i < this.dolarList.length; i += itemsPerRow) {
      this.dolarRows.push(this.dolarList.slice(i, i + itemsPerRow));
    }
  }
}
