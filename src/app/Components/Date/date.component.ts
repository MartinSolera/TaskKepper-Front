import { Component } from '@angular/core';
import { DateService } from '../../Service/date.service';
import Swal from 'sweetalert2';

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
        Swal.fire(
          'Han pasado ' + result + ' dias',
          '',
          'info'
        )
      }
    )
  }

  onSubmit() {
    this.calculateDate(); 
    console.log('Selected date:', this.selectedDate); 
  }
}
