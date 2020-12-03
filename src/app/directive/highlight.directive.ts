import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highLightColor: string;
  // tslint:disable-next-line: no-input-rename
  @Input('defaultColor') defaultColor: string;

    @HostListener('mouseenter') onMouseEnter() {
    this.highLight(this.highLightColor || this.defaultColor || 'red');
    console.log(this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highLight(null);
  }



  constructor(private el: ElementRef) {
   }
   // tslint:disable-next-line: typedef
   private highLight(color: string){
     this.el.nativeElement.style.backgroundColor = this.highLightColor;
   }
}
