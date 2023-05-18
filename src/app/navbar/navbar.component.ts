import { Component } from '@angular/core';
import { CounterService } from '../services/counter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  counter!: number;
  constructor(private counterService: CounterService) {}
  ngOnInit() {
    this.counterService.counterValue.subscribe(res=> this.counter = res);
  }
}
