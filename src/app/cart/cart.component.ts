import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { GetDataService } from '../services/get-data.service';
import { ActivatedRoute } from '@angular/router';
import { ShowInCartService } from '../services/show-in-cart.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  arrayOfCartList: any;
  counter!: number;
  sum: number = 0;
  constructor(private counterService: CounterService,
              private orders: ShowInCartService){}
  ngOnInit() {
    this.orders.cartList.subscribe(res => this.arrayOfCartList = res)
    // this.counter.counterValue.subscribe((res: any)=> this.counter = res)
    this.counterService.counterValue.subscribe(res=> this.counter = res);
  }

  increaseCounter(itemId: any) {
    let filterItem = this.arrayOfCartList?.find((item: any) => item.id == itemId);
    filterItem.quantity++
    filterItem.countOfPrice = filterItem.quantity * filterItem.price;
    this.total()
  }

  decreaseCounter(itemId: number) {
    let filterItem = this.arrayOfCartList?.find((item: any) => item.id == itemId);
    if(filterItem.quantity > 1) {
      filterItem.quantity--
      filterItem.countOfPrice = filterItem.quantity * filterItem.price;
    this.total()
    }
  }

  removeItem(itemId: number) {
    this.arrayOfCartList = this.arrayOfCartList?.filter((item: any)=> item.id != itemId)
    this.counterService.changeValue(--this.counter)
    this.orders.afterRemove(this.arrayOfCartList);
    this.total()
  }
  total() {
    this.sum = 0
    this.arrayOfCartList?.map((item: any)=> this.sum += Number(item.countOfPrice))
    return this.sum;
  }
//   total(){
//     let total = 0;
//     for (var i = 0; i < this.arrayOfCartList.length; i++) {
//         if (this.arrayOfCartList[i].countOfPrice) {
//             total += this.arrayOfCartList[i].countOfPrice * this.arrayOfCartList[i].quantity;
//             this.sum = total;
//         }
//     }
//     return this.sum;
// }
}