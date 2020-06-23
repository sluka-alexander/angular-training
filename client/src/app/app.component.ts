import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Хочу выучить Angular',
    text: 'Я всё ещё учу компоненты и вообще всё на свете',
    id: 1,
    },
    { title: 'Следующий блок',
    text: 'Следующий блок будет про директивы и что-то ещё',
    id: 2,
    }
  ];
  removePost(id: number) {
    this.posts = this.posts.filter(p=> {
      return p.id !== id;
    })
  }
  updatePosts(post: Post) {
    this.posts.unshift(post);
  }
}
