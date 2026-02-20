import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'; // Importante para formularios
import { SeriesService } from '../../services/series.service';
import { CommonModule } from '@angular/common'; // Por si acaso

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // Importamos las herramientas de formulario
  templateUrl: './new.component.html',
  styleUrl: './new.component.css' // Si no tienes archivo .css, borra esta línea
})
export class NewComponent {
  
  // Inyectamos el servicio y el router (para cambiar de página)
  private seriesService = inject(SeriesService);
  private router = inject(Router);

  // Definimos el formulario y sus reglas
  formulario: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    channel: new FormControl('', [Validators.required]),
    rating: new FormControl('', [Validators.required, Validators.min(0), Validators.max(10)])
  });

  // Función que se ejecuta al dar al botón
  enviarFormulario() {
    if (this.formulario.valid) {
      // Llamamos al servicio para guardar
      this.seriesService.createSerie(this.formulario.value).subscribe((respuesta) => {
        alert('¡Serie guardada! Id: ' + respuesta.id);
        this.router.navigate(['/home']); // Nos devuelve al listado
      });
    } else {
      alert('Revisa los datos, hay algo mal.');
    }
  }
}