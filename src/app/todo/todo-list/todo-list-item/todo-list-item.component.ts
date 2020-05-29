import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo-list.component';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent{
  

  @Input() todo: Todo;
  isEdit: boolean = false;
  title: string;
  description: string;

  @Output() delTodo = new EventEmitter<Todo>();
  @Output() editTodo = new EventEmitter<Todo>();
  
 showEdit(): void {
  this.isEdit = !this.isEdit;
  //this.editTodo.emit({ title: this.title, description: this.description });


 }

  
}
