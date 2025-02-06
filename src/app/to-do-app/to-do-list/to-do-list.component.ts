import { Component, input, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-to-do-list',
  imports: [MatIconModule],
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss',
})
export class ToDoListComponent {
  todoTasks = input<Array<string>>([]);
  inProgressTasks = input<Array<string>>([]);
  completedTasks = input<Array<string>>([]);

  inProgressButtonClick = output<{
    value: number;
    task: string;
    list: 'todo';
  }>();

  completeButtonClick = output<{
    value: number;
    task: string;
    list: 'todo' | 'inprogress';
  }>();

  deleteButtonClick = output<{
    value: number;
    list: 'todo' | 'inprogress' | 'completed';
  }>();

  onInProgressButtonClick(value: number, task: string, list: 'todo') {
    this.inProgressButtonClick.emit({ value, task, list });
  }

  onCompleteButtonClick(
    value: number,
    task: string,
    list: 'todo' | 'inprogress'
  ) {
    this.completeButtonClick.emit({ value, task, list });
  }

  onDeleteButtonClick(
    value: number,
    list: 'todo' | 'inprogress' | 'completed'
  ) {
    this.deleteButtonClick.emit({ value, list });
  }
}
