import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <--- Importante

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink], // <--- Añádelo aquí
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}