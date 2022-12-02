import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product';

//maneja la logica del carro  
@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  constructor() { }

  private _marketList:Product []=[];
  marketList:BehaviorSubject<Product[]>=new BehaviorSubject([]);


  addToCart(product: Product) {
    let prod:Product=this._marketList.find((value1)=>value1.name == product.name) //me busca el producto
    if(!prod){
      if(product.quantity>0)
      this._marketList.push({... product});
    } else{
      prod.quantity += product.quantity;
    }
    console.log(this._marketList);
    this.marketList.next(this._marketList);
  }

  emptyCart(): void{     
    this._marketList.splice(0, this._marketList.length);   }
  
}
