import {  Component, OnInit, Renderer2 } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartapiService } from '../service/cartapi.service';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  product:any[] = []
  constructor(private api:ApiService,private cartapi:CartapiService,private route:Router ,private render:Renderer2){
    gsap.registerPlugin(ScrollTrigger);

  }
  ngOnInit(): void {
    this.api.getproductlist().subscribe((a:any)=>{
      this.product = a;
      this.product.forEach((a:any)=>{
        Object.assign({quantity:1 ,total:a.price})
      })
    })
   window.addEventListener('wheel',function(dets){
    if (dets.deltaY > 0) {
      gsap.to('.marque' ,{
        transform:'translateX(-200%)',
        duration:4,
        repeat:-1,
        ease:'none'
      })
      gsap.to('.marque img',{
        rotate:180
      })
    }
    else{
      gsap.to('.marque',{
  transform:'translate(0%)',
  duration:4,
  repeat:-1,
  ease:'none'

});
gsap.to('.marque img',{
  rotate:0
})
    }
   })
  if (window.innerWidth <= 768) {
      let start:number = 0
      let end:number = 0

      window.addEventListener('touchstart',function(e:any){
        start = e.touches[0].pageX

      })
        window.addEventListener('touchmove',function(e:any){
          end = e.touches[0].pageX

        
        if (end > start) {
          gsap.to('.marque' ,{
            transform:'translateX(-200%)',
            duration:4,
            repeat:-1,
            ease:'none'
          })
          gsap.to('.marque img',{
            rotate:180
          })  
        }
        else if (end < start) {
          gsap.to('.marque',{
            transform:'translate(0%)',
            duration:4,
            repeat:-1,
            ease:'none'
          
          });
          gsap.to('.marque img',{
            rotate:0
          })
        }
      })
  }

  this.animate();
   
  }
  animate(){
    gsap.to('.container1', {
      transform: 'translateX(9%)',
      opacity:1,
      duration:1,
      scrollTrigger: {
        trigger: '.container1', 
        scroller: 'body',         
        start: 'top 100%',        
        end: 'top 0%',          
        scrub: 2,
                      
      }
    });
    gsap.to('.hero1 h1', {
      opacity:1,
      duration:1,
      delay:.9,       
     scrollTrigger: {
      trigger:'.hero1',
      scroller:'body',
      start:'top 80%',
      end:'top 50%',
      scrub:true,     
     }
   });
    gsap.to('.container2',{
      transform:'translateX(18%)',
      opacity:1,
      duration:1,
      scrollTrigger:{
         trigger:'.container2',
         scroller:'body',
        start:'top 100%',
        end:'top 0%',
        scrub:2,
      }
    })
    gsap.to('.hero2 h1', {
      opacity:1,
      duration:1,
      delay:.9,       
     scrollTrigger: {
      trigger:'.hero2',
      scroller:'body',
      start:'top 80%',
      end:'top 50%',
      scrub:true,     
     }
   });
    gsap.to('.container3', {
      transform: 'translateX(0%)',
      opacity:1,
      duration:1,
      scrollTrigger: {
        trigger: '.container3', 
        scroller: 'body',         
        start: 'top 100%',        
        end: 'top 0%',          
        scrub: 2,
                      
      }
    });
    gsap.to('.hero3 h1', {
       opacity:1,
       duration:1,
       delay:.9,       
      scrollTrigger: {
       trigger:'.hero3',
       scroller:'body',
       start:'top 80%',
       end:'top 50%',
       scrub:true,     
      }
    });
  }
  
  addtocart(pro:any){
    this.cartapi.addtocart(pro)
  }
  

}
