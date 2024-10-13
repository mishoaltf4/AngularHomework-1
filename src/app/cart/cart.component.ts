import { Component, Input } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductsService } from '../Services/products.service';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.interface';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  
  products: Product[];
  
  constructor(private prSv: ProductsService) {
    this.products = prSv.products;
  }
  
  removeAll():void{
    this.prSv.clearProducts();
    this.products = this.prSv.products;
  }

  removeProduct(id: number): void {
    this.prSv.removeOneProduct(id);
    this.products = this.prSv.products;
  }
}
