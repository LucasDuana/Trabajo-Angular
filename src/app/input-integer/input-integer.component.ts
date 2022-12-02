import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent {


  
  @Input()
  quantity!: number;
  
  @Input()
  max!:number

  @Output()
  quantityChange :EventEmitter<number> =new EventEmitter<number>();

  @Output()
    maxReached:EventEmitter<String>=new EventEmitter<String>();

  upQuantity():void{
    if (this.max>this.quantity){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else
      this.maxReached.emit("No hay mas");
  } 

  
  downQuantity():void{
    if (this.quantity>0)
      this.quantity--;
      this.quantityChange.emit(this.quantity);
  }
}
