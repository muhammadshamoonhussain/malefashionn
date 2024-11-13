import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-cursor',
  templateUrl: './cursor.component.html',
  styleUrl: './cursor.component.css'
})
export class CursorComponent implements OnInit{
  @ViewChild('cursor' , {static: true}) refCursor : ElementRef | undefined;
  constructor(private render : Renderer2){}
ngOnInit(): void {

}
@HostListener('document:mousemove',['$event'])
cursor(event:any){
  if (this.refCursor?.nativeElement) {
    gsap.to(this.refCursor.nativeElement,{
      x: event.clientX,
      y: event.clientY,
      duration: 0.5,
        ease: 'back.Out',
        overwrite: 'auto'

    })
  }
}
}
