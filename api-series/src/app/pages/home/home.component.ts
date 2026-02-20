import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesService, Serie } from '../../services/series.service'; // Asegúrate de que esta ruta no dé error

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html', // Fíjate que aquí busca el archivo .html
  styleUrl: './home.component.css'      // Y aquí el .css (si no tienes .css, borra esta línea)
})
export class HomeComponent implements OnInit {
  private seriesService = inject(SeriesService);
  arrSeries: Serie[] = [];

  ngOnInit(): void {
    this.seriesService.getAllSeries().subscribe((datos: Serie[]) => {
      this.arrSeries = datos;
      console.log('Datos recibidos:', this.arrSeries);
    });
  }
}