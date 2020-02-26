import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "src/app/services/peliculas.service";
import { Pelicula } from "src/app/interfaces/pelicula";

@Component({
  selector: "app-listado",
  templateUrl: "./listado.component.html",
  styleUrls: ["./listado.component.css"]
})
export class ListadoComponent implements OnInit {
  constructor(private peliculasService: PeliculasService) {}

  public peliculas: any[];

  ngOnInit() {
    this.getListadoPeliculas();
  }

  getListadoPeliculas() {
    this.peliculasService.getPeliculas().subscribe(peliculaSnapshot => {
      this.peliculas = [];
      peliculaSnapshot.forEach(peliculaData => {
        this.peliculas.push(peliculaData.payload.doc.data());
        console.log("Cargada: " + peliculaData.payload.doc.id);
      });
    });
  }
}
