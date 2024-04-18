import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface carouselImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-carosello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carosello.component.html',
  styleUrl: './carosello.component.css',
})
export class CaroselloComponent {
  @Input() images: carouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  selectedIndex = 0;


  //seleziona l'index dell'immagine al click del dot
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
}