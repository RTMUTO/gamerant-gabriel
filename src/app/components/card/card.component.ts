import { Component, Input } from '@angular/core';
import { Image } from '../../models/image';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title?: string;
  @Input() franchise?: string;
  @Input() platforms?: string;
  @Input() developers?: string;
  @Input() publisher?: string;
  @Input() genres?: string;
  @Input() image: Image = { src: '', alt: 'default image' };  // Assigning a default value


}
