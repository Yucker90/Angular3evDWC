import { Component, OnInit } from "@angular/core";
import { Pelicula } from "src/app/interfaces/pelicula";
import { PeliculasService } from "src/app/services/peliculas.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  pelicula: Pelicula;
  reparto: string[];
  director: string;
  titulo: string;
  anyo: number;
  id: string;
  espectadores: number;

  constructor(
    private peliculasService: PeliculasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getPelicula();
  }
  getPelicula() {
    this.director = this.titulo = "";
    this.anyo = this.espectadores = 0;
    this.reparto = [];
    const id = this.route.snapshot.paramMap.get("id");
    this.peliculasService.getPelicula(id).subscribe(peliSnapshot => {
      this.pelicula = peliSnapshot.payload.data() as Pelicula;
      this.getReparto();
    });
/*
    this.titulo = this.pelicula.titulo;
    this.director = this.pelicula.director;
    this.espectadores = this.pelicula.espectadores;
    this.reparto = this.pelicula.reparto;
    this.anyo = this.pelicula.year;*/
  }

  getReparto() {
    this.reparto = [];
    this.pelicula.reparto.forEach(element => {
      this.reparto.push(element);
    });
  }
}
