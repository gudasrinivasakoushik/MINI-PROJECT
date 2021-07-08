import { ElementRef } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { HostListener } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {

  
  // constructor(private element:ElementRef) 
  // {
  //     element.nativeElement.style.color="brown"
  //     element.nativeElement.style.backgroundColor="white"
  // }
  @HostBinding('style.color') color:string
  @HostBinding('style.backgroundColor') bgcolor:string | undefined

  constructor(private eleRef:ElementRef, private renderer:Renderer2) {
    this.color = 'black'
   }

   @HostListener('mouseover') onMouseOver(){
     this.color ='blue'
     this.bgcolor = 'pink'

   }
   @HostListener('mouseleave') onMouseLeave(){
    this.color ='green'
    this.bgcolor = 'white'

}

}
