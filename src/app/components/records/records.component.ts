import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { AnonymousSubject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {

  public peliculas: any;
  pelicula: any = "";
  peliculasMasTaquilleras: any[];

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.getListadoPeliculas();
  }

  // Obtenemos todas las películas de la BD
  getListadoPeliculas() {
    this.peliculasService.getPeliculas().subscribe(peliculaSnapshot => {
      this.peliculas = [];
      peliculaSnapshot.forEach(peliculaData => {
        this.pelicula = peliculaData.payload.doc.data() as Pelicula;
        this.peliculas.push({
          id: peliculaData.payload.doc.id,
          data: peliculaData.payload.doc.data(),
          // Queremos obtener también su recaudación, así que la guardamos aparte
          recaudacion: (this.pelicula.Espectadores * 5.5).toLocaleString('us-US', { style: 'currency', currency: 'USD' })
        });
      });
      // Las ordenamos
      this.ordenaPeliculas(this.peliculas);
    });
  }


  ordenaPeliculas(peliculas: any) {
    this.peliculasMasTaquilleras = [];
    // Usamos el método sort de los array
    peliculas.sort((n1, n2) => {
      if (n1.data.Espectadores > n2.data.Espectadores)
        return -1;
      if (n1.data.Espectadores < n2.data.Espectadores)
        return 1;
      return 0;
    });

    // Creamos un segundo array, pero solo cogemos las 5 primeras películas ordenadas descendentemente
    for (let i = 0; i < 5; i++) {
      this.peliculasMasTaquilleras.push(peliculas[i]);
    }
  }
}
