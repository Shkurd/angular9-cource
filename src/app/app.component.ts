import { Component, OnInit } from '@angular/core';

export interface Post { // заготовка интерфейса поста т.е. шаблон.
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  posts: Post[] = [
    {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты...', id:1},
    // {title: 'Следующий блок', text: 'Будет про директивы и еще про пайпы...', id:2}
  ]

  ngOnInit(): void {
    
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  removePost(id: number) {
    console.log('removePost', id)
    this.posts = this.posts.filter(post => post.id !== id)
  }
}
