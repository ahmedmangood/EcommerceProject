import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import ProductsData from '../products.json';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  items:Product [] = ProductsData;
  selectedItem: any;

  constructor(private activatedRoute: ActivatedRoute){}
  ngOnInit() {
    console.log(this.activatedRoute.snapshot.params['id']);

    this.selectedItem = this.items.find(item => item.id == this.activatedRoute.snapshot.params['id']);
  }
}
