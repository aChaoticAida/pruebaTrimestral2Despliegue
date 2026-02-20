import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Serie {
  _id?: string;
  title: string;
  channel: string;
  rating: number;
}

@Injectable({
  providedIn: 'root'
})
export class SeriesService {

  private http = inject(HttpClient);
  
  
  private apiUrl = 'https://peticiones.online/api/series';

  constructor() { }

  // 1. Método para PEDIR la lista (GET)
  getAllSeries(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }

  // 2. Método para ENVIAR una nueva (POST)
  createSerie(serie: Serie): Observable<any> {
    return this.http.post<any>(this.apiUrl, serie);
  }
}