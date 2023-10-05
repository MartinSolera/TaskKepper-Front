import { Component } from '@angular/core';
import { DateService } from '../../Service/date.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  selectedDate: Date; 
  
  constructor(private dateService: DateService) {}

  calculateDate(){

    const year = this.selectedDate.getFullYear();
    const month = (this.selectedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = this.selectedDate.getDate().toString().padStart(2, '0');
    
    // Formatea la fecha en formato ISO (YYYY-MM-DD)
    const formattedDate = `${year}-${month}-${day}`;

    this.dateService.calculateDays(formattedDate).subscribe(
      result => {
        console.log("El resultado del service es: " + result);
        alert("Han pasado " + result + " desde la fecha indicada"); 
        
      }
    )
  }

  onSubmit() {
    this.calculateDate(); 
    console.log('Selected date:', this.selectedDate); 
  }
}
