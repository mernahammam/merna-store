import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  products;
  constructor(
    private cartService: CartService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.products = this.getProductsList();
  }

  getProductsList() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  addToCart(product) {
    this.cartService.items.push(product);
  }

}
