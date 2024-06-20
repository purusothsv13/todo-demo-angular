import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightItem]',
  standalone: true,
})
export class HighlightItemDirective {
  @Input() progress: number = 0;

  constructor(private readonly el: ElementRef) {
    if (this.progress >= 0.7) {
      el.nativeElement.style.background = 'rgba(0, 256, 0, 0.5)';
    } else {
      el.nativeElement.style.background = 'rgba(256, 0, 0, 0.5)';
    }
  }
}
