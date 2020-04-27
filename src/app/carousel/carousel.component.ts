import { Component, OnInit, AfterViewInit, ContentChildren, QueryList, ViewChildren, ElementRef, ViewChild, Input, HostListener } from '@angular/core';
import { CarouselItemDirective, CarouselItemElement } from './carousel-item.directive';
import { AnimationPlayer, AnimationFactory, animate, style, AnimationBuilder } from '@angular/animations';
import 'hammerjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit {

  @ContentChildren(CarouselItemDirective) items: QueryList<CarouselItemDirective>;
  @ViewChildren(CarouselItemElement, { read: ElementRef }) private itemsElements: QueryList<ElementRef>;
  @ViewChild('carousel') private carousel: ElementRef;
  @Input() timing = '250ms ease-in';
  @Input() showControls = true;
  private player: AnimationPlayer;
  private itemWidth: number;
  currentSlide = 0;
  carouselWrapperStyle = {}

  private buildAnimation(offset: number) {
    return this.builder.build([
      animate(this.timing, style({ transform: `translateX(-${offset}px)` }))
    ]);
  }

  private playPageAnimation() {
    const offset = this.currentSlide * this.itemWidth;
    const myAnimation: AnimationFactory = this.buildAnimation(offset);
    this.player = myAnimation.create(this.carousel.nativeElement);
    this.player.play();
  }

  next(infiniteNext: boolean = false ) {
    if (this.currentSlide + 1 === this.items.length && infiniteNext !== true) {
      return;
    } else {
      this.currentSlide = (this.currentSlide + 1) % this.items.length;
    }
    this.playPageAnimation();
  }

  prev(infinitePrev: boolean = false ) {
    if (this.currentSlide === 0 && infinitePrev !== true ) {
      return;
    } else {
      this.currentSlide = ((this.currentSlide - 1) + this.items.length) % this.items.length;
    }
    this.playPageAnimation();
  }

  goToPage(page: number) {
    this.currentSlide = page;
    this.playPageAnimation();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.ngAfterViewInit();
    this.playPageAnimation();
  }

  constructor(private builder: AnimationBuilder) {
  }

  ngAfterViewInit() {
      this.itemWidth = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
      this.carouselWrapperStyle = { width: `${this.itemWidth}px` };
  }

}
