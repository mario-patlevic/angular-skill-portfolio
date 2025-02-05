import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToDoAppComponent } from "./to-do-app/to-do-app.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToDoAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
