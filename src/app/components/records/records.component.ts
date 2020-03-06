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

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit() {
    this.getListadoPeliculas();

  }


  getListadoPeliculas() {
    let limit = 0;
    this.peliculasService.getPeliculas().subscribe(peliculaSnapshot => {
      this.peliculas = [];
      peliculaSnapshot.forEach(peliculaData => {
        if(limit == 5){
          return;
        }
        this.pelicula = peliculaData.payload.doc.data() as Pelicula;
        this.peliculas.push({
          id: peliculaData.payload.doc.id,
          data: peliculaData.payload.doc.data(),
          recaudacion: (this.pelicula.Espectadores *5.5).toLocaleString('us-US', { style: 'currency', currency: 'USD' })
        });

        console.log((peliculaData.payload.doc.data() as Pelicula).espectadores);
      limit++});

      this.ordenaPeliculas(this.peliculas);
    });
  }


  ordenaPeliculas(peliculas: any) {
    peliculas.sort((n1, n2) => {
      if (n1.data.Espectadores > n2.data.Espectadores)
        return -1;
      if (n1.data.Espectadores < n2.data.Espectadores)
        return 1;
      return 0;
    });
  }
}
