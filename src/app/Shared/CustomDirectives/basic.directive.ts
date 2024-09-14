import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBasic]',
})
export class BasicDirective {
  //The "ElementRef" class represents the element, in which the directive is invoked
  constructor(private el: ElementRef) {
    debugger;
    console.log('we are logging the directive element');
    console.log(el);
  }

  // Directive can receive values from the element using @Input() decorator.
  @Input('appBasic')
  textColor: string = '';
  //Directive can add events to the element by using @HostListener() decorator.
  @HostListener('click')
  paragraphClick() {
    debugger;
    this.el.nativeElement.style.color = this.textColor;
  }
  @HostListener('mouseover')
  paragraphmouseover() {
    debugger;
    this.el.nativeElement.style.color = 'yellow';
  }
  // @HostListener('mouseleave')
  // paragraphmouseleave() {
  //   debugger;
  //   this.el.nativeElement.innerText = 'I am Good';
  // }
}
