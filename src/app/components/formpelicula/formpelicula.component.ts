import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Router } from '@angular/router';


@Component({
  selector: "app-formpelicula",
  templateUrl: "./formpelicula.component.html",
  styleUrls: ["./formpelicula.component.css"]
})


export class FormpeliculaComponent implements OnInit {
  // Formulario de creación de una película
  FormularioPeli = this.formBuilder.group({
    titulo: new FormControl(""),
    director: new FormControl(""),
    year: new FormControl(""),
    espectadores: new FormControl("")
  });

  // Variable para añadir los actores
  reparto: string[] = [];
  // Variable que usaré para el id de los inputs generados dinámicamente
  numActores: number = 1;
  // Nombre del actor a añadir
  formActor: string;
  // Variable que me indica si el usuario está identificado o no
  public logged: string;

  constructor(
    private formBuilder: FormBuilder, private peliculasService: PeliculasService,
  ) {
  }

  ngOnInit() {
    // Miro si el usuario está identificado o no
    this.logged = sessionStorage.getItem("logged");
   }

  addActor() {
    // Como ya hay un input, el siguiente que se añadiría sería el 2
    this.numActores++;

    // Añado el actor al array, usando binding bidireccional
   this.reparto.push(this.formActor);
   // Creo un elemento p, para mostrar los actores que hemos ido añadiendo
   let input = document.createElement("p");
   input.appendChild(document.createTextNode("Actor "+ (this.numActores-1)+ ": " + this.formActor));
    input.setAttribute("style", "margin-top: 4px");
    input.setAttribute("id", "actor" + this.numActores);
    document.getElementById("actores").appendChild(input);
    document.getElementById("actor").setAttribute("placeholder", "Actor "+ this.numActores);
    this.formActor="";
  }

// Envío los datos del formulario y del array a la base de datos y refresco la página para vaciar los campos
  enviar() {
    let data = {
      Titulo: this.FormularioPeli.get("titulo").value,
      Director: this.FormularioPeli.get("director").value,
      Year: this.FormularioPeli.get("year").value,
      Espectadores: this.FormularioPeli.get("espectadores").value,
      Reparto: this.reparto
    };

    this.peliculasService.addPelicula(data);

    window.location.reload();
  }



}
