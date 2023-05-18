import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowInCartService {

  private cartArr = new BehaviorSubject([]);

  cartList = this.cartArr.asObservable()

  constructor() { }

  getListCart(arrVal: any) {
    return this.cartArr.next(arrVal);
  }

  afterRemove(data: any) {
    return this.cartArr.next(data);
  }
}
