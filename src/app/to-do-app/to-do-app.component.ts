import { Component } from '@angular/core';
import { ToDoInputComponent } from './to-do-input/to-do-input.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

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

  inProgressList: string[] = ['Todo app'];

  completedList: string[] = [
    'Get complete button to work',
    'Get delete button to work',
    'Put on github',
  ];

  title = 'To-do app';

  todoFromInput: string = '';

  addNewTask(value: string) {
    this.todoList.unshift(value);
  }

  inProgressTask(event: { value: number; task: string }) {
    const { value, task } = event;
    this.inProgressList.unshift(task);
    this.todoList.splice(value, 1);
  }

  completeTask(event: {
    value: number;
    task: string;
    list: 'todo' | 'inprogress';
  }) {
    const { value, task, list } = event;
    this.todoList.splice(value, 1);
    this.inProgressList.splice(value, 1);
    this.completedList.unshift(task);
  }

  deleteTask(event: {
    value: number;
    list: 'todo' | 'inprogress' | 'completed';
  }) {
    const { value, list } = event;

    if (list === 'todo') {
      this.todoList.splice(value, 1);
    } else if (list === 'inprogress') {
      this.inProgressList.splice(value, 1);
    } else {
      this.completedList.splice(value, 1);
    }
  }
}
