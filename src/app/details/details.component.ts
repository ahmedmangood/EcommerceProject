import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
// import ProductsData from '../products.json';
import { Product } from "../interfaces/product";
import { GetDataService } from "../services/get-data.service";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"],
})
export class DetailsComponent {
  items!: Product[];

  singleItem!: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private getData: GetDataService
  ) {}

  ngOnInit() {
    this.getData
      .getListById(this.activatedRoute.snapshot.params["id"])
      .subscribe((res: any) => this.singleItem = res)
  }
  
}
