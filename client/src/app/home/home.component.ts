import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  message: string = 'Give me your money';
  time: string
  constructor() {
    setInterval(()=> {
      this.time = new Date().toLocaleTimeString();
    });
  }

  ngOnInit(): void {
  }

}
