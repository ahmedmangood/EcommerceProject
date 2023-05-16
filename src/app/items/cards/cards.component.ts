import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  @Input() singleItem!:Product;

  constructor(private router: Router) {}

  showDetails(id: number) {
    this.router.navigate(["details", id])
  }
}
