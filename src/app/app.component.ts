import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-learn';


  ngOnInit() {
    // 如何监听 title 值的变化
    const Observable = from(this.title);
    Observable.subscribe((x) => {
      console.log(x);
    });
    Observable.subscribe((x) => {
      console.log(x);
    });
  }

  onClick() {
    this.title = this.title === 'angular-learn' ? '666' : 'angular-learn';
  }
}
