import { Component, input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrl: './to-do-list.component.scss'
})
export class ToDoListComponent {
  todoTasks = input<Array<string>>([]);

  onDeleteClick(task: string, index: number) {
    console.log('Delete clicked ' + task);
    console.log('Index: ' + index);
    console.log('Tasks: ' + this.todoTasks());
  }
}
