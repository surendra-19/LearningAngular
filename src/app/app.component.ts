import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { InputEventsComponent } from './input-events/input-events.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CounterComponent,InputEventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LearningAngular';
}
