import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../Services/products.service';
import { Product } from '../../models/product.interface';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {

  productServices
  @Input() producter!: Product
  @Output() removeOneProduct = new EventEmitter<number>();


  constructor(private productService: ProductsService ){
    this.productServices = productService
  }

  ngOnChange(productID:number):void{
    const updatedProduct = this.productServices.products.find(product => product.id === productID);
    if (updatedProduct) {
      updatedProduct.totalPrice = updatedProduct.price * updatedProduct.quantity
      this.productService.updateTotalPrice();
    }
  }

  removeProduct():void{
    this.removeOneProduct.emit(this.producter.id);
  }
}
