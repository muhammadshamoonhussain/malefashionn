import { Component, ElementRef, OnInit, Renderer2, ViewChild,HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'project';
  @ViewChild('cursor') refCursor:ElementRef | undefined;

  constructor(public router:Router,private render:Renderer2){}

 ngOnInit(): void {

 }
 @HostListener('document:mousemove',['$event'])
 onmouseMove(event:any){
 if (this.refCursor?.nativeElement) {
      gsap.to(this.refCursor.nativeElement, {
        x: event.clientX,   // Mouse X position
        y: event.clientY, 
        duration: 0.5,     // Duration of the animation
        ease: 'back.Out', // Ease for smooth effect
        overwrite: 'auto'
      });
    }
 }
 
 
}
