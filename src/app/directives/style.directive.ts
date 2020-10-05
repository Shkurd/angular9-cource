import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})

export class StyleDirective {

  @Input('appStyle') color: string = "blue"
  @Input() fontWeight = "normal"
  @Input() dStyles: {border?: string, borderRadius?: string}


  constructor(private el: ElementRef, private renderer: Renderer2) {
    // el.nativeElement.style.color = 'red'; правильно придавать новые свойства так, как это указано ниже
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue')
  }

  @HostListener('click', ['$event.terget']) onClick(event: Event) {
    console.log(event)
  }

  @HostListener('mouseenter') onEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color)
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight)
    this.renderer.setStyle(this.el.nativeElement, 'border', this.dStyles.border)
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius)
  }

  @HostListener('mouseleave') onleave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', null)
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null)
    this.renderer.setStyle(this.el.nativeElement, 'border', null)
    this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null)
  }

}
