import { Injectable } from '@angular/core';
import { Product } from '../models/product.interface';


@Injectable({
  providedIn: 'root'
})


export class ProductsService {

  products: Product[] = [
    {
      "id": 0,
      "name": "T-shirt",
      "size": "medium",
      "color": "blue",
      "material": "plastic",
      "seller": "Artel",
      "price": 10.93,
      "totalPrice": 10.93,
      "img": "https://images-eu-prod.cms.commerce.dynamics.com/cms/api/scwrkbhfhd/imageFileData/search?fileName=/Products%2F60543772_000_001.png",
      "quantity": 1,
    },
    {
      "id": 1,
      "name": "shirt",
      "size": "medium",
      "color": "blue",
      "material": "plastic",
      "seller": "Artel",
      "price": 40,
      "totalPrice": 40,
      "img": "https://www.gorewear.com/_next/image?url=https://cdn11.bigcommerce.com/s-njk923j41v/images/stencil/640w/products/575/16010/100623-9900_main_t30q__78327.1692373098.png&w=640&q=90&fm=webp",
      "quantity": 1,
    },
    {
      "id": 2,
      "name": "SS-shirt",
      "size": "medium",
      "color": "blue",
      "material": "plastic",
      "seller": "Artel",
      "price": 10,
      "totalPrice": 10,
      "img": "https://pbx2-pbww-prod-pbww-cdn.getprintbox.com/media/productimage/e925de22-44e0-4276-bb92-0b4101f5f834/Blank%20Jacket_thumb_900x900?mt=1583407059.733",
      "quantity": 1,
    }
  ]

  coupons: string[] = [
    "coupon1", "coupon2"
  ]
    discount:number = 0

    
    totalPrice:number = this.products.reduce((sum, product) => sum + product.totalPrice, 0) - this.discount;
    
    tax = this.totalPrice * 0.20;

    updateTotalPrice():void{
      this.totalPrice = this.products.reduce((sum, product) => sum + product.totalPrice, 0) - this.discount;
      this.tax = this.totalPrice * 0.20;
    }

    clearProducts():void{
      this.products = [];
      this.updateTotalPrice();
    }

    removeOneProduct(id:number):void{
      this.products = this.products.filter(product => product.id !== id);
      this.updateTotalPrice();
    }
  
    checkCoupon(couponId: string):void{
      if(this.coupons.includes(couponId)){
        this.discount = 49.99;
        this.updateTotalPrice();
      }else{
        console.log("coupon is not find");
        alert("Coupon was'nt find!");
      }
    }


  constructor( ) { }
}
