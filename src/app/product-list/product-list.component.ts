import { Component } from '@angular/core';

import { Product } from '../product';
import { ProductCartService } from '../product-cart.service';
import { ProductService } from '../product.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {

  products:Product [] =[];


maxReached(s:String){
  alert(s);
}

ngOnInit(): void {}

constructor(private cart:ProductCartService,private productData:ProductService){
  this.productData.getAll().subscribe(products=> this.products = products);
}

addToCart(product:Product):void{
  this.cart.addToCart(product);
  product.stock -= product.quantity;
  product.quantity=0;
}





}
