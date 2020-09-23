import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Dynamic title app.component';
  number = 42;
  arr = [1, 2, 3, 4, 5];

 inputValue = "Пока пустое значение";

 inputValue3 = "Пока пустое значение3";

 backgroundToggle: any = true;

  // img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1000px-React-icon.svg.png'

  // constructor() {
  //   setTimeout(()=>{
  //     this.img = 'https://repository-images.githubusercontent.com/24195339/87018c00-694b-11e9-8b5f-c34826306d36'
  //   }, 1000)
  // } 

  onInput(e?) {
    this.inputValue = e.target.value
  }

  onClick(e?) {
    console.log('click')
  }

  myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  myObj = [
    {title: 'заголовок 1', text: 'тестовый текст 1'},
    {title: 'заголовок 2', text: 'тестовый текст 2'},
    {title: 'заголовок 3', text: 'тестовый текст 3'}
  ];

}
