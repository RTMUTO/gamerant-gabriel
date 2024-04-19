import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Image } from '../../models/image';

/* interface carouselImage {
  src: string;
  alt: string;
} */

@Component({
  selector: 'app-carosello',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carosello.component.html',
  styleUrl: './carosello.component.css',
})
export class CaroselloComponent {
  @Input() images: Image[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  selectedIndex = 0;


  //seleziona l'index dell'immagine al click del dot
  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick():void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1
    } else{
      this.selectedIndex--;
    }
  }

  onNextClick():void{
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0
    } else{
      this.selectedIndex++;
    }
  }
}
