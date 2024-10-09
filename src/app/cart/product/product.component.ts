import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';

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

  totalPrice:number = this.products.reduce((sum, product) => sum + product.totalPrice, 0);
  
  ngOnChange(productID:number):void{
    const updatedProduct = this.products.find(product => product.id === productID);
    if (updatedProduct) {
      updatedProduct.totalPrice = updatedProduct.price * updatedProduct.quantity
      this.updateTotalPrice();
    }
  }

  delete(id:number):void{
    this.products = this.products.filter(product => product.id !== id);
    this.updateTotalPrice();
  }

  updateTotalPrice():number{
    return this.totalPrice = this.products.reduce((sum, product) => sum + product.totalPrice, 0);
  }
}
