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

  public peliculas: any;

  ngOnInit() {
    this.getListadoPeliculas();
  }

  // Obtenemos todas las películas de la BD
  getListadoPeliculas() {
    this.peliculasService.getPeliculas().subscribe(peliculaSnapshot => {
      this.peliculas = [];
      peliculaSnapshot.forEach(peliculaData => {
        this.peliculas.push({
          id: peliculaData.payload.doc.id,
           data: peliculaData.payload.doc.data()
          });
      });
    });
    // Si somos administradores (o estamos registrados) DEBERÍA poder dejarnos borrar una película
    if (sessionStorage.getItem("logged") == "true")   {
      for(let i = 0; i < document.getElementsByClassName("botonBorrar").length; i++) 
      document.getElementsByClassName("botonBorrar")[i].setAttribute("hidden", "false");
    }
  }
}
