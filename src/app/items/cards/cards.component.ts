import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { CounterService } from 'src/app/services/counter.service';
import { ShowInCartService } from 'src/app/services/show-in-cart.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() singleItem!:Product;
  count: number = 0;
  newArr!: any[];
  constructor(private router: Router,
              private counterService: CounterService,
              private orders: ShowInCartService) {}
  ngOnInit() {
    this.counterService.counterValue.subscribe(res => this.count = res);
    this.orders.cartList.subscribe(res => this.newArr = res);
  }
  showDetails(id: number) {
    this.router.navigate(["details", id])
  }
  addToCartList(id: any, image: string, price: number, title: any) {
   let itemsArray = this.newArr?.map(item => item.id);
    if(!itemsArray.includes(id)) {
      this.counterService.changeValue(++this.count);
      let order = {
        id: id,
        image: image,
        price: price,
        title: title,
        quantity: 1,
        countOfPrice: price
      }
      this.newArr.push(order)
      Swal.fire('added to cart successfully!', 'check the cart', 'success');
    }
  }
}
