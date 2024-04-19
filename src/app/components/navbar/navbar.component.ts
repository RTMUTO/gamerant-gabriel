import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importa RouterModule


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isOpen = false;  // Variabile per tracciare lo stato del menu

  toggleMenu() {
    this.isOpen = !this.isOpen;  // Cambia lo stato del menu ogni volta che il bottone è cliccato
  }
}
