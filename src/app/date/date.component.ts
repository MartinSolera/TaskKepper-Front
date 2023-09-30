import { Component } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {
  selectedDate: string; 
  
  constructor(private dateService: DateService) {}

  calculateDate(){
    this.dateService.calculateDays(this.selectedDate).subscribe(
      result => {
        console.log("El resultado del service es: " + result);
        
      }
    )
  }


  onSubmit() {
    this.calculateDate(); 
    console.log('Selected date:', this.selectedDate); 
  }
}
