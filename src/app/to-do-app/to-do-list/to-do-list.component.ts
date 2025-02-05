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

  deleteButtonClick = output<number>();

  onDeleteButtonClick(value: number) {
    this.deleteButtonClick.emit(value);
  }
}
