import { Component } from '@angular/core';
import { ProductComponent } from '../cart/product/product.component';
import { ProductsService } from '../Services/products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-coupon',
  standalone: true,
  imports: [ProductComponent, FormsModule],
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.scss'
})
export class CouponComponent {
  productServ

  couponId: string = ''

  constructor(private productService: ProductsService) {
    this.productServ = productService;
  }

  couponer(){
    this.productServ.checkCoupon(this.couponId);
  }

}
