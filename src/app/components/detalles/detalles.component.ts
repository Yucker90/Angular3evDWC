import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "src/app/services/peliculas.service";
import { Pelicula } from "src/app/interfaces/pelicula";
import { ActivatedRoute, Router } from "@angular/router";
import { Location} from '@angular/common';

@Component({
  selector: "app-detalles",
  templateUrl: "./detalles.component.html",
  styleUrls: ["./detalles.component.css"]
})
export class DetallesComponent implements OnInit {
  constructor(
    private peliculasService: PeliculasService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  pelicula: any = "";
  reparto: string[] = [];
  recaudacion: number = 0;
  dinero: string = "";

  ngOnInit() {
    this.getPelicula();
  }

  getPelicula() {
    const id = this.route.snapshot.paramMap.get("id");
    this.peliculasService
      .getPelicula(id)
      .subscribe(
        peliSnapshot =>{
          (this.pelicula = peliSnapshot.payload.data() as Pelicula)
          this.getReparto();
          this.recaudacion = this.pelicula.Espectadores * 5.5;
          this.dinero = this.recaudacion.toLocaleString('us-US', { style: 'currency', currency: 'USD' });
        }
      );


  }

  getReparto() {
    this.reparto = [];
    this.pelicula.Reparto.forEach(element => {this.reparto.push(element)   
    });
  }

  volver(){
    this.location.back();
  }
}
