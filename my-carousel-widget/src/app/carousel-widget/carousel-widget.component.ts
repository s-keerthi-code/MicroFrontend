import { Component } from '@angular/core';

declare global {
  interface Window {
    wishlistAPI: {
      addItem: (item: string) => void;
      removeItem: (item: string) => void;
      getItems: () => string[];
      isWishlisted: (item: string) => boolean;
    }
  }
}

@Component({
  selector: 'app-carousel-widget',
  templateUrl: './carousel-widget.component.html',
  styleUrls: ['./carousel-widget.component.css']
})
export class CarouselWidgetComponent {
  images = [
    'assets/images/airpods.jpg',
    'assets/images/camera.jpg',
    'assets/images/heels.jpg',
    'assets/images/shoe.jpg',
    'assets/images/watch.jpg',
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    // clearInterval(this.intervalId);
  }

  startAutoSlide() {
    // clearInterval(this.intervalId); // reset if already running
    // this.intervalId = setInterval(() => this.next(), 3000);
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.startAutoSlide();
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.startAutoSlide();
  }

  goToSlide(index: number) {
    this.currentIndex = index;
    this.startAutoSlide();
  }

  toggleWishlist(image: string) {
    if (window.wishlistAPI?.isWishlisted(image)) {
      window.wishlistAPI.removeItem(image);
    } else {
      window.wishlistAPI.addItem(image);
    }
  }

  isWishlisted(image: string): boolean {
    return window.wishlistAPI?.isWishlisted(image);
  }

}
