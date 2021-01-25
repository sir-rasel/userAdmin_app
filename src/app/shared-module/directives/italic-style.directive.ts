import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appItalicStyle]',
  host: {
    '(mouseenter)': 'onMouseHover()',
    '(mouseleave)': 'onMouseLeave()',
  }
})
export class ItalicStyleDirective {

  constructor(
    private element : ElementRef,
  ) { 
    element.nativeElement.style.fontstyle = 'italic';
  }

  onMouseHover() {
    this.element.nativeElement.style.color = 'red';
  }

  onMouseLeave() {
    this.element.nativeElement.style.color = 'black';
  }

}
