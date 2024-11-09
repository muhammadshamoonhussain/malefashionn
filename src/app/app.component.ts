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
 @HostListener('document:mouseenter', ['$event.target'])
 onMouseEnter(target: any): void {
   const cursorEl = this.refCursor?.nativeElement;
   if (cursorEl && (target.tagName === 'a' || target.tagName === 'button')) {
     gsap.to(cursorEl, { 
       width: 50,   // Increase size
       height: 50, 
       backgroundColor: 'rgba(255, 255, 255, 0.7)', // Change color to white with transparency
       boxShadow: '0px 0px 20px rgba(255, 0, 0, 0.8)', // Red shadow on hover
       border: '2px solid rgba(255, 255, 255, 0.8)',  // White border
       duration: 0.3, // Smooth transition for hover effect
       ease: 'power3.out' // Easing for the hover animation
     });
   }
 }

 // Remove 'hover' class when cursor leaves interactive elements
 @HostListener('document:mouseleave', ['$event.target'])
 onMouseLeave(target: any): void {
   const cursorEl = this.refCursor?.nativeElement;
   if (cursorEl && (target.tagName === 'a' || target.tagName === 'button')) {
     gsap.to(cursorEl, { 
       width: 30,  // Revert back to default size
       height: 30,
       backgroundColor: 'transparent',  // Revert color to transparent
       boxShadow: '2px 1px 2px rgb(119, 118, 118)', // Default shadow
       border: '2px solid rgb(117, 117, 117)', // Default border
       duration: 0.3, // Smooth transition for hover effect removal
       ease: 'power3.out' // Easing for the hover animation removal
     });
   }
 }
 
 
}
