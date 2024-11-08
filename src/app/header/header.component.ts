import { Component,HostListener,OnInit } from '@angular/core';
import { CartapiService } from '../service/cartapi.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
cartTotal:number = 0
constructor(private cartapi:CartapiService){}
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
