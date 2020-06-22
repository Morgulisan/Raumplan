import { Directive, Input, NgModule, HostBinding, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'div[appBackgroundImage], p[appBackgroundImage]',
})
export class BackgroundImageDirective  {

  @Input('appBackgroundImage')
  public imgSrc: string;

  @HostBinding('style.backgroundImage')
  public backgroundImage: string | null = null;

  ngOnInit() {
    this.backgroundImage = `url(${this.imgSrc})`;
  }

/*
  @HostListener('mouseenter')
  public onMouseEnter() {
    this.backgroundImage = `url(${this.imgSrc})`;
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    this.backgroundImage = null;
  }*/

}

@NgModule({
  declarations: [BackgroundImageDirective],
  exports: [BackgroundImageDirective]
})
export class BackgroundImageDirectiveModule {}
