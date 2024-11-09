import { Component,ElementRef,HostListener,OnInit, Renderer2, ViewChild, viewChild } from '@angular/core';
import { CartapiService } from '../service/cartapi.service';
import { gsap } from "gsap";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

cartTotal:number = 0
constructor(private cartapi:CartapiService,private render:Renderer2){}
ngOnInit(): void {
  this.cartapi.product.subscribe((a:any)=>{
    this.cartTotal = a.length
  })
 
  
}
ismenu:boolean = false;
toggleMenu(){
  this.ismenu =! this.ismenu 
}
closenavbar(){
  this.ismenu = false
}

}
