import { Component } from '@angular/core';
import ProductsData from '../products.json';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items:Product [] = ProductsData;
}
