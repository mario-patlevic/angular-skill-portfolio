import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-to-do-input',
  imports: [FormsModule, MatIcon],
  templateUrl: './to-do-input.component.html',
  styleUrl: './to-do-input.component.scss',
})
export class ToDoInputComponent {
  todoInput = '';

  todoInputChange = output<string>();

  onInputChange(value: string) {
    this.todoInputChange.emit(value);
    this.todoInput = '';
  }
}
