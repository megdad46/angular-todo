import { Component } from '@angular/core';
import { TodoItem } from './interfaces/todo-item';

@Component({
  selector: 'app-root',
  template: `
  <h2 class="app-title">
    Welcome to {{ title }}!
  </h2> 
  
  <app-list-manager></app-list-manager>
  
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular To Do List App';
  
}
