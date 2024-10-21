import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackgroundIsChange]'
})
export class BackgroundIsChangeDirective implements OnInit {
  @Input() defaultBackground: string = 'linear-gradient(90deg, rgb(113, 8, 30) 0%, rgb(215, 72, 92) 100%)';
  @Input() hoverBackground: string = 'rgba(130, 19, 40, 0.9)';

  // private _backgroundColor: string = '';
  // @HostBinding('style.backgroundImage')
  // get getBgColor(){
  //   return this._backgroundColor;
  // }
  constructor(private el: ElementRef, private rend: Renderer2) {
  }
  @HostListener('mouseenter')
  onMouseEnter(){
    this.changeElementBgColor(this.hoverBackground)
  }
  @HostListener('mouseleave')
  onMouseLeave(){
    this.changeElementBgColor(this.defaultBackground)
  }
  ngOnInit(): void {
    this.changeElementBgColor(this.defaultBackground)
  }

  changeElementBgColor(color: string){
    this.rend.setStyle(this.el.nativeElement, 'background', color);
  }

}
