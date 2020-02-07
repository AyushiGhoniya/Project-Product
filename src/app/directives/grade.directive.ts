import { Directive, ElementRef, Renderer2, Input, SimpleChanges, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appGrade]'
})
export class GradeDirective{

  @Input() appGrade: number;
  color: string;
  grade: string;

  constructor(private render: Renderer2, private e: ElementRef) { }

  @HostBinding('style.backgroundColor') bgcolor = '';

  ngOnChanges(changes: SimpleChanges): void {

    if(this.appGrade>20) {
      // this.color="#5cb85c";
      this.bgcolor='#449d44';
      this.grade='A';
    } else if (this.appGrade>10 && this.appGrade<=20) {
      // this.color="#f0ad4e";
      this.bgcolor='#ec971f';
      this.grade='B';
    } else {
      // this.color="#d9534f";
      this.bgcolor='#c9302c'
      this.grade='C';
    }
    // this.render.setStyle(this.e.nativeElement, 'background-color', this.color);
    this.e.nativeElement.style.color = 'white';
    this.e.nativeElement.innerHTML = this.grade;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.render.setStyle(this.e.nativeElement, 'font-size', '30px')
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.e.nativeElement, 'font-size', '19px')
  }

}
