import { Component,ElementRef,HostListener,OnInit, Renderer2, ViewChild, viewChild } from '@angular/core';
import { CartapiService } from '../service/cartapi.service';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
 var tl = gsap.timeline()
 tl.from('.logo',{
  y:-30,
  opacity:0,
  duration:.5,
  delay:0.5
 })
 tl.from('li',{
  y:-20,
  opacity:0,
  duration:.5,
  stagger:0.3
 })
 tl.from('.fa-solid',{
  y:-20,
  opacity:0,
  duration:.5,
  stagger:0.3,
  scale:1.1
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
