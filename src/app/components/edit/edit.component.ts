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
    const id = this.route.snapshot.paramMap.get("id");
    this.peliculasService
      .getPelicula(id)
      .subscribe(peliSnapshot => {
        this.pelicula= {
          titulo: peliSnapshot.payload.data()['Titulo'],
          director: peliSnapshot.payload.data()['Director'],
          espectadores: peliSnapshot.payload.data()['Espectadores'],
          year: peliSnapshot.payload.data()['Year'],
          reparto: peliSnapshot.payload.data()['Reparto']
        };
        this.getReparto();
        console.log(this.pelicula);
        this.formEditPelicula.setValue({
          titulo: this.pelicula.titulo,
          director: this.pelicula.director,
          anyo: this.pelicula.year,
          espectadores: this.pelicula.espectadores
        });
      });
      
  }

  getReparto() {
    this.reparto = [];
    this.pelicula.reparto.forEach(element => {
      this.reparto.push(element);
    });
  }

}
