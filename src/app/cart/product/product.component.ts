import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../Services/products.service';

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
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {

  products: Product[];

  constructor(private productService: ProductsService ){
    this.products = productService.products
  }

  ngOnChange(productID:number):void{
    const updatedProduct = this.products.find(product => product.id === productID);
    if (updatedProduct) {
      updatedProduct.totalPrice = updatedProduct.price * updatedProduct.quantity
      this.productService.updateTotalPrice();
    }
  }

  delete(id:number):void{
    this.productService.delete(id);
    this.products = this.productService.products;
  }
}
