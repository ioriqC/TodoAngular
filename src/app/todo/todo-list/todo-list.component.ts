import { Component, Input } from '@angular/core';

export interface Todo {
    title: string;
    description: string;
}

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent {
    @Input() todos: Todo[];
    titleHovered: string;
    isEdit: boolean = false;

    

    onItemHover(title: string): void {
        
        this.titleHovered = title;
    
    }
    deleteTodo(todo: Todo): void {
        for(let i = 0; i < this.todos.length; i++){
            if(this.todos[i] == todo){
                this.todos.splice(i,1);
            }
        }
    }

    editItemTodo({title, description}: Todo): void {
        const itemTodo = this.todos.some((todo: Todo) =>{
            return (title !== todo.title) && (description !== todo.description);
          });
          if(!itemTodo) {
            this.todos.push({ title, description });
          }
    }
   

}