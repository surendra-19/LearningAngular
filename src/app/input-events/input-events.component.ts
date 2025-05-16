import { Component } from '@angular/core';

@Component({
  selector: 'app-input-events',
  imports: [],
  templateUrl: './input-events.component.html',
  styleUrl: './input-events.component.css'
})
export class InputEventsComponent {
  value:string= '';
  enteredvalue:string = '';
  changeHandler(e:Event){
    this.value = (e.target as HTMLInputElement).value;
  }
  clickHandler(){
    this.enteredvalue = this.value;
    this.value = '';
  }
}

