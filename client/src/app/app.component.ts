import { Component } from '@angular/core';

export  interface Post {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Asus', text: 'Лучший ноутбук'},
    {title: 'JS', text: 'Лучший язык программирования'},
    {title: 'MongoDB', text: 'Лучшая База Данных'},
  ];
  search: string = '';
}
