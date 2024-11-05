import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartapiService } from '../service/cartapi.service';
import { id } from "../../app/type";
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent implements OnInit {
  product:any[] = []
  filter1:any [] = []
  constructor(private api:ApiService,private cartapi:CartapiService){}
  ngOnInit(): void {
    this.api.getproductlist().subscribe((a:any)=>{
      this.product = a;
      this.filter1 = a;
      this.product.forEach((a:any)=>{
        Object.assign({quantity:1 ,total:a.price})
      })
    })
  }
  addtocart(pro:any){
    this.cartapi.addtocart(pro)
  }
  filter(category:string){
    if (category === 'all') { 
     this.filter1 = this.product
    }
    else{
      this.filter1 = this.product.filter(product => product.category === category)
    }
  }
}
