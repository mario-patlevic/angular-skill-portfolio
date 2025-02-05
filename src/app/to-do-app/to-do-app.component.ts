import { Component } from '@angular/core';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { DefaultValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-to-do-app',
  imports: [ToDoInputComponent, ToDoListComponent],
  templateUrl: './to-do-app.component.html',
  styleUrl: './to-do-app.component.scss',
})
export class ToDoAppComponent {
  todoList: string[] = [
    'Use local storage instead of array',
    'Get complete button to work',
    'Study and excercise coding',
    'Go out',
    'Excercise at gym',
  ];

  title = 'To-do app';

  todoFromInput: string = '';

  addNewTask(value: string) {
    this.todoList.unshift(value);
  }

  deleteTask(value: number) {
    this.todoList.splice(value, 1);
  }
}
