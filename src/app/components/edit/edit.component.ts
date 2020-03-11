import { Component, OnInit } from "@angular/core";
import { Pelicula } from "src/app/interfaces/pelicula";
import { PeliculasService } from "src/app/services/peliculas.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";
import {Location} from "@angular/common";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  pelicula: Pelicula;
  reparto: string[];
  public formEditPelicula = new FormGroup({
    titulo: new FormControl(''),
    director: new FormControl(''),
    anyo: new FormControl(''),
    espectadores: new FormControl('')
  });
  tituloPelicula: string;
  public logged: string;

  constructor(
    private peliculasService: PeliculasService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getPelicula();

    // Compruebo si el usuario se ha identificado para permitir o no la edición de una película
    this.logged = sessionStorage.getItem("logged");
  }

// Obtengo una película y cargo sus datos en el formulario para su edición
  getPelicula() {
    this.reparto = [];
    this.tituloPelicula = "";
    const id = this.route.snapshot.paramMap.get("id");
    this.peliculasService
      .getPelicula(id)
      .subscribe(peliSnapshot => {
        this.pelicula = {
          Titulo: peliSnapshot.payload.data()['Titulo'],
          Director: peliSnapshot.payload.data()['Director'],
          Espectadores: peliSnapshot.payload.data()['Espectadores'],
          Year: peliSnapshot.payload.data()['Year'],
          Reparto: peliSnapshot.payload.data()['Reparto']
        };

        // Obtengo el reparto de la película
        this.getReparto();

        // Cargo en una variable el título, para poder mostrarlo en la cabecera
        this.tituloPelicula = this.pelicula.Titulo.toUpperCase();

        // Cargo los datos de la película en el formulario
        this.formEditPelicula.setValue({
          titulo: this.pelicula.Titulo,
          director: this.pelicula.Director,
          anyo: this.pelicula.Year,
          espectadores: this.pelicula.Espectadores
        });

      });
  }



  getReparto() {
    this.reparto = [];
    this.pelicula.Reparto.forEach(element => {
      this.reparto.push(element);
    });
  }

// Guardo los datos de la película en la base de datos
  guardar() {
    const id = this.route.snapshot.paramMap.get("id");

    this.peliculasService.setPelicula(id,
      {
        Titulo: this.formEditPelicula.get('titulo').value,
        Director: this.formEditPelicula.get('director').value,
        Year: this.formEditPelicula.get('anyo').value,
        Espectadores: this.formEditPelicula.get('espectadores').value,
        Reparto: this.reparto
      });
  }

  // Vuelvo a la página anterior
  volver(){
    this.location.back();
  }
}
