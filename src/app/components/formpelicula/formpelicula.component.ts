import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, FormArray } from "@angular/forms";
import { PeliculasService } from "src/app/services/peliculas.service";
import { Pelicula } from "src/app/interfaces/pelicula";

@Component({
  selector: "app-formpelicula",
  templateUrl: "./formpelicula.component.html",
  styleUrls: ["./formpelicula.component.css"]
})
export class FormpeliculaComponent implements OnInit {
  FormularioPeli = this.formBuilder.group({
    titulo: new FormControl(""),
    director: new FormControl(""),
    year: new FormControl(""),
    espectadores: new FormControl("")
  });
  reparto: string[] = [];
  repartoForm: FormArray;
  numActores: number = 2;

  constructor(
    private formBuilder: FormBuilder,
    private peliculasService: PeliculasService
  ) {}

  ngOnInit() {}

  addActor(): void {
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("placeholder", "Actor " + this.numActores);
    input.setAttribute("style", "margin-top: 5px");
    input.setAttribute("id", "actor" + this.numActores);
    document.getElementById("actores").appendChild(input);
    this.numActores++;
  }

  enviar() {
    for (let i = 0; i <= this.numActores; i++) {
      this.reparto.push(
        document.getElementById("actor" + this.numActores).textContent
      );
    }

    let pelicula = {
      titulo: this.FormularioPeli.get("titulo").value,
      director: this.FormularioPeli.get("director").value,
      year: this.FormularioPeli.get("year").value,
      espectadores: this.FormularioPeli.get("espectadores").value,
      reparto: this.reparto
    };

    this.peliculasService.addPelicula(pelicula);
  }
}
