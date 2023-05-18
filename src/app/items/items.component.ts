import { Component } from '@angular/core';
// import ProductsData from '../products.json';
import { Product } from '../interfaces/product';
import { GetDataService } from '../services/get-data.service';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  items!: Product[];

  constructor(private getData: GetDataService) {}

  ngOnInit() {
    this.getData.getList().subscribe((res: any) => this.items = res.products)
  }

}
