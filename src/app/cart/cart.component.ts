import { Component, ViewChild, viewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductsService } from '../Services/products.service';
import { CommonModule } from '@angular/common';

interface Product {
  id: number;
  name: string;
  size: string;
  color: string;
  material: string;
  seller: string;
  price: number;
  totalPrice: number,
  img: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  products: Product[]

  constructor(private prSv: ProductsService) {
    this.products = prSv.products;
  }

  removeAll():void{
    this.prSv.clearProducts();
    this.products = this.prSv.products;
  }

  view():void{
    console.log(this.prSv.updateTotalPrice())
  }
}
