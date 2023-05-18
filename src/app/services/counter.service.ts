import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  
  private counter = new BehaviorSubject(0);

  counterValue = this.counter.asObservable();

  constructor() { }

  changeValue(newValue: number) {
    this.counter.next(newValue);
  }
}
