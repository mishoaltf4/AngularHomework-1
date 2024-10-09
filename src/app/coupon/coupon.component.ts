import { Component } from '@angular/core';
import { ProductComponent } from '../cart/product/product.component';

@Component({
  selector: 'app-coupon',
  standalone: true,
  imports: [ProductComponent],
  templateUrl: './coupon.component.html',
  styleUrl: './coupon.component.scss'
})
export class CouponComponent {
  
}
