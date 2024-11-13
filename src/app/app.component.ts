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
  @ViewChild('cursor' ,{static: true}) refCursor:ElementRef | undefined;

  constructor(public router:Router,private render:Renderer2){}

 ngOnInit(): void {
 
 }
 
 
}
