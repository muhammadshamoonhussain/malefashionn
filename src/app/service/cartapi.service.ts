import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartapiService  implements OnInit{
cart:any[]=[]
product = new BehaviorSubject<any[]>([]);
  constructor(private http:HttpClient) {
    this.loadCartFromLocalStorage(); 
   }
  ngOnInit(): void {
    
  }
  private loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      this.cart = JSON.parse(savedCart);
      this.product.next(this.cart); // Update the BehaviorSubject with the data
    }
  }
  getproduct(){
    return this.product.asObservable()
  }
  addtocart(pro:any){
   this.cart.push(pro);
   this.product.next(this.cart);
   console.warn(this.product);
   this.saveCartToLocalStorage();
  }
  private saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  getTotal() {
    let total = 0;
    console.log('Cart contents:', this.cart);  // Debugging line to check cart contents
    this.cart.forEach((item: any) => {
        const price = parseFloat(item.price.replace('$', '').trim());
        total += price;
    });
    console.log('Calculated Total:', total);  // Debugging line to check total after loop
    this.saveCartToLocalStorage();
    return total;
}

  removepro(pro:any){
    this.cart = this.cart.filter((a:any)=>a.id !== pro.id)
    this.product.next(this.cart);
    this.saveCartToLocalStorage(); 
  }
  remove(){
    this.cart = [];
    this.product.next(this.cart)
    this.saveCartToLocalStorage(); 

  }
 
}
