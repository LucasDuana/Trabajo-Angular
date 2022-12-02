import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductCartService } from '../product-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  marketList:Product[];
  constructor(private cart:ProductCartService){
    cart.marketList.subscribe((c)=> this.marketList=c )  
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  };

  @Output()   
  emittEvent: EventEmitter<String>= new EventEmitter<String>() ;

  total():number{
    let total=0;
    this.marketList.forEach(product=> {
      total+=product.price*product.quantity; 
    });
    return total;
  }

  emptyCart():void{
    this.cart.emptyCart();
    this.emittEvent.emit("Gracias por su compra!no aceptamos devolucion,chauchis,mil besitos,chauuu, hasta pronto");
  }
   

}
