import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  items = [];
  constructor(
    private cartService: CartService
    ) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
