import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartapiService } from '../service/cartapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  product:any[] = []
  constructor(private api:ApiService,private cartapi:CartapiService,private route:Router){}
  ngOnInit(): void {
    this.api.getproductlist().subscribe((a:any)=>{
      this.product = a;
      this.product.forEach((a:any)=>{
        Object.assign({quantity:1 ,total:a.price})
      })
    })
  }
  addtocart(pro:any){
    this.cartapi.addtocart(pro)
  }

}
