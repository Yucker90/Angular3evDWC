import { Component, OnInit } from "@angular/core";
import { PeliculasService } from "src/app/services/peliculas.service";
import { Pelicula } from "src/app/interfaces/pelicula";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-detalles",
  templateUrl: "./detalles.component.html",
  styleUrls: ["./detalles.component.css"]
})
export class DetallesComponent implements OnInit {
  constructor(
    private peliculasService: PeliculasService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  pelicula: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.getPelicula(id);
  }

  getPelicula(idpelicula: string) {
    this.peliculasService
      .getPelicula(idpelicula)
      .subscribe(
        peliSnapshot =>
          (this.pelicula = peliSnapshot.payload.data())
      );
  }
}
