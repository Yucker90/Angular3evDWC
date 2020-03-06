import { Component, OnInit} from "@angular/core";
import { FormBuilder, FormControl } from "@angular/forms";
import { PeliculasService } from 'src/app/services/peliculas.service';


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
  numActores: number = 1;
  formActor: string;

  constructor(
    private formBuilder: FormBuilder, private peliculasService: PeliculasService
  ) {
  }

  ngOnInit() { }

  addActor(actor: string) {
    this.numActores++;
    /*
    this.reparto.push(actor);
    let input = document.createElement("p");
    input.appendChild(document.createTextNode(actor));
    */

   this.reparto.push(this.formActor);
   let input = document.createElement("p");
   input.appendChild(document.createTextNode("Actor "+ (this.numActores-1)+ ": " + this.formActor));
    input.setAttribute("style", "margin-top: 4px");
    input.setAttribute("id", "actor" + this.numActores);
    document.getElementById("actores").appendChild(input);
    document.getElementById("actor").setAttribute("placeholder", "Actor "+ this.numActores);
    this.formActor="";
    console.log(this.reparto);
  }


  enviar() {
    let data = {
      Titulo: this.FormularioPeli.get("titulo").value,
      Director: this.FormularioPeli.get("director").value,
      Year: this.FormularioPeli.get("year").value,
      Espectadores: this.FormularioPeli.get("espectadores").value,
      Reparto: this.reparto
    };

    this.peliculasService.addPelicula(data);
    console.log(data);

  }

}
