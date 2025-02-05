import { Component } from '@angular/core';
import { ToDoInputComponent } from "./to-do-input/to-do-input.component";
import { ToDoListComponent } from "./to-do-list/to-do-list.component";

@Component({
  selector: 'app-to-do-app',
  imports: [ToDoInputComponent, ToDoListComponent],
  templateUrl: './to-do-app.component.html',
  styleUrl: './to-do-app.component.scss'
})
export class ToDoAppComponent {
  todoList: string[] = ['Update for loop for to-do list array'];
  
  title = 'To-do app';

  todoFromInput: string = '';

  updateTaskLabel(value: string) {
    this.todoList.unshift(value);
    console.log(this.todoList);
  }
}
