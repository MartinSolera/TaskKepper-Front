import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-pdf',
  templateUrl: './generate-pdf.component.html',
  styleUrls: ['./generate-pdf.component.css']
})
export class GeneratePDFComponent implements OnInit{
    constructor() {
    }

    ngOnInit(): void {
      window.location.href = 'http://localhost:8080/api/tasksPDF';
    }
}
