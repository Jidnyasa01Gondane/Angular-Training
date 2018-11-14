import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor() { }

  @HostBinding('style.color') mycolor = "lightgreen";
  
  @HostListener ('mouseover') handleMouseOver () {
    this.mycolor = 'red';
  }

  @HostListener ('mouseleave') handleMouseLeave () {
    this.mycolor = 'black';
  }
}
