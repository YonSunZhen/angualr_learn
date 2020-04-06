import { Component, OnInit } from '@angular/core';
import { from, Subject, timer, of, Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-learn';
  arr = [1, 2, 3];
  Observable;

  ngOnInit() {
    // 如何监听 title 值的变化
    this.Observable = new BehaviorSubject(0);
    this.Observable.subscribe((x) => {
      console.log('a' + x);
    });
    this.Observable.next(1);

    // const subject = new Subject();
    // subject.subscribe({
    //   next: (v) => {
    //     console.log('observerA: ' + v);
    //   }
    // });
    // subject.subscribe({
    //   next: (v) => {
    //     console.log('observerB: ' + v);
    //   }
    // });
    // subject.next(1);
    // subject.next(2);
  }

  onClick() {
    this.title = this.title === 'angular-learn' ? '666' : 'angular-learn';
    // this.Observable.next(this.title);
    this.Observable.subscribe((x) => {
      console.log('b' + x);
    });
    this.Observable.next(2 + Math.random());
  }
}
