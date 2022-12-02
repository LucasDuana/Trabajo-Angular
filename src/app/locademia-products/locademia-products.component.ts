import { Component } from '@angular/core';

@Component({
  selector: 'app-locademia-products',
  templateUrl: './locademia-products.component.html',
  styleUrls: ['./locademia-products.component.scss']
})
export class LocademiaProductsComponent {

  emittEvent(m:String):void{
    alert(m);
  }

}
