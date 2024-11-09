import {  Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartapiService } from '../service/cartapi.service';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger with GSAP
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  product:any[] = []
  constructor(private api:ApiService,private cartapi:CartapiService,private route:Router ,private render:Renderer2){}
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
