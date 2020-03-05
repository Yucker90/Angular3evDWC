import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormBuilder, FormControl, FormArray } from "@angular/forms";


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
  numActores: number = 1;

  constructor(
    private formBuilder: FormBuilder,
  ) {
  }


  ngOnInit() { }


  /*
  addActor(): void {
    this.numActores++
    let input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "form-control");
    input.setAttribute("placeholder", "Actor " + this.numActores);
    input.setAttribute("style", "margin-top: 5px");
    input.setAttribute("id", "actor" + this.numActores);
    document.getElementById("actores").appendChild(input);
   ;
  }
*/

  addActor(actor: string) {

    this.reparto.push(actor);
    let input = document.createElement("p");
    input.appendChild(document.createTextNode(actor));
    input.setAttribute("style", "margin-top: 3px");
    input.setAttribute("id", "actor" + this.numActores);
    document.getElementById("actores").appendChild(input);
    console.log(this.reparto);
  }


  enviar() {
    console.log(this.numActores);
    let doc;
    for (let i = 1; i <= this.numActores; i++) {
      this.reparto.push();
      console.log(doc.text);
    }

    console.log(this.reparto);

    let pelicula = {
      titulo: this.FormularioPeli.get("titulo").value,
      director: this.FormularioPeli.get("director").value,
      year: this.FormularioPeli.get("year").value,
      espectadores: this.FormularioPeli.get("espectadores").value,
      reparto: this.reparto
    };

    //this.peliculasService.addPelicula(pelicula);
    console.log(pelicula);

  }

}
