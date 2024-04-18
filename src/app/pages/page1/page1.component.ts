import { Component } from '@angular/core';
import { CaroselloComponent } from "../../components/carosello/carosello.component";

 
@Component({
    selector: 'app-page1',
    standalone: true,
    templateUrl: './page1.component.html',
    styleUrl: './page1.component.css',
    imports: [CaroselloComponent]
})


export class Page1Component {

  images = [
    {
      src: '../assets/gioco1.avif',
      alt: 'silent hill'
    },
    {
      src: '../../assets/gioco2.avif',
      alt: 'Ghost of coso'
    }
  ]
}