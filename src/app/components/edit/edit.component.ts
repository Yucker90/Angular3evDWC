import { Component, OnInit } from "@angular/core";
import { Pelicula } from "src/app/interfaces/pelicula";
import { PeliculasService } from "src/app/services/peliculas.service";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

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

  constructor(
    private peliculasService: PeliculasService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getPelicula();
  }


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

        console.log("Test 1: " + this.pelicula.Titulo);
        this.tituloPelicula = this.pelicula.Titulo;
        this.formEditPelicula.setValue({
          titulo: this.pelicula.Titulo,
          director: this.pelicula.Director,
          anyo: this.pelicula.Year,
          espectadores: this.pelicula.Espectadores
        });
        console.log("Test 2: " + this.pelicula);

      });
    console.log("Test 3: " + this.pelicula);
  }



  getReparto() {
    this.reparto = [];
    this.pelicula.Reparto.forEach(element => {
      this.reparto.push(element);
    });
  }

  guardar() {
    const id = this.route.snapshot.paramMap.get("id");

    this.peliculasService.setPelicula(id,
      {
        Titulo: this.formEditPelicula.get('titulo').value,
        Director: this.formEditPelicula.get('director').value,
        Year: this.formEditPelicula.get('year').value,
        Espectadores: this.formEditPelicula.get('espectadores').value,
        Reparto: this.reparto
      })
  }

}
