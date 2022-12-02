import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Product } from './product';
const URL="https://638a6b77c5356b25a21ae765.mockapi.io/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 

  }



  getAll():Observable<Product[]>{
    return this.http.get<Product[]>(URL).pipe(tap((products:Product[]) => products.forEach(product => product.quantity = 0)));
  }

}
