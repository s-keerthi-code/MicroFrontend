import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, NgFor } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
declare global {
  interface Window {
    cartStore: any;
  }
}

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css'],
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, MatCardModule, NgFor, CommonModule, MatInputModule, MatButtonModule]
})

export class ProductContainerComponent {

  cartStore: any;
  
  products = [
    {
      id: 1,
      name: 'Apple AirPods (2nd Generation) Case, White',
      description: 'High quality airpods with noise cancellation.',
      image: '../../assets/images/airpods.jpg',
      quantity: 1,
      price: 8999
    },
    {
      id: 2,
      name: 'Nikon D7500 20.9MP Digital SLR Camera (Black)',
      description: '20.9MP DX-Format CMOS Sensor, SnapBridge Bluetooth and Wi-Fi;4K UHD Video Recording at 30 fps',
      image: '../../assets/images/camera.jpg',
      quantity: 1,
      price: 77900
    },
    {
      id: 3,
      name: 'Chunky Spool Heels',
      description: ' Allows the feet to move as naturally as possible, particularly around the toe area where maximum flexibility is',
      image: '../../assets/images/heels.jpg',
      quantity: 1,
      price: 3000
    },
    {
      id: 4,
      name: 'Decker Black Watch',
      description: 'Comfortable and lightweight watch for everyday use.',
      image: '../../assets/images/watch.jpg',
      quantity: 1,
      price: 8495
    },
    {
      id: 5,
      name: 'Genuine Leather Formal Shoe',
      description: 'Loud and clear statement with deep comfort.',
      image: '../../assets/images/shoe.jpg',
      quantity: 1,
      price: 3359
    },
    {
      id: 6,
      name: 'Storio Cubes 3X3 Magic Puzzle',
      description: 'Improves your concentration improves your hand eye co preservationists problem solving skills Improves creativity & imagination skills',
      image: '../../assets/images/cube.jpg',
      quantity: 1,
      price: 99
    }
  ];

  ngOnInit() {
    this.cartStore = window.cartStore;
  }

  addToCart(product: any) {
    console.log(`${product.name} added to cart with quantity ${product.quantity}`);
    this.cartStore.getState().addToCart(product);
  }
}
