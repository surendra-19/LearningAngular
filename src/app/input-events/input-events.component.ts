import { Component } from '@angular/core';

@Component({
  selector: 'app-input-events',
  imports: [],
  templateUrl: './input-events.component.html',
  styleUrl: './input-events.component.css'
})
export class InputEventsComponent {
  value:string= '';
  changeHandler(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    console.log(value);
  }
  clickHandler(){
    this.value = ''
  }
}
