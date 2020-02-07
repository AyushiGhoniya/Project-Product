import { Directive, HostBinding, Input, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appInput]'
})
export class InputDirective {

  @Input() appInput: number;

  constructor() { }

  @HostBinding('style.border-color') bcolor = '';

  ngOnChanges(changes: SimpleChanges): void {
    
    if(this.appInput>20) {
      this.bcolor="#449d44"
    } else if (this.appInput>10 && this.appInput<=20) {
      this.bcolor="#ec971f"
    } else {
      this.bcolor="#c9302c"
    }
    
  }

}
