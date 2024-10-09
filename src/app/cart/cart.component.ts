import { Component, ViewChild, viewChild } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  @ViewChild(ProductComponent) productComponent !: ProductComponent

  removeAll():void{
    this.productComponent.products = [];
  }

  totalPriceOfProducts:number = this.productComponent.updateTotalPrice();

  view():void{
    console.log(this.productComponent.totalPrice)
  }
}
