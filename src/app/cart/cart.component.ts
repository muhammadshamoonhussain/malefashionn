import { Component, OnInit } from '@angular/core';
import { CartapiService } from '../service/cartapi.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  product:any [] = []
  total:any
  constructor(private cartapi:CartapiService){}
ngOnInit(): void {
  this.cartapi.getproduct().subscribe((a:any)=>{
    this.product = a.map((p:any) =>({...p,quantity:p.quantity || 1}));
    this.total = this.cartapi.getTotal();
  })
} 
removepro(pro:any){
  this.cartapi.removepro(pro)
  this.total = this.cartapi.getTotal()
}
remove(){
  this.cartapi.remove()
  this.product = []
  this.total = 0
}

}
