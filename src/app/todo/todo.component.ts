import { Component } from '@angular/core';
import { Todo } from './todo-list/todo-list.component';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent  {

  todos: Todo[] = [
    {title: 'Create App', description: 'Use Angular'},
    {title: 'Buy Milk', description: 'In Linella'},
    {title: 'Talk to john', description: 'John number :07998898'}
  ];

  handleTodoSubmited({ title, description }: Todo): void {
    const isTodoAlreadyExists = this.todos.some((todo: Todo) =>{
      return (title === todo.title) && (description === todo.description);
    });
    if(!isTodoAlreadyExists) {
      this.todos.push({ title, description });
    }
  }
  

}
