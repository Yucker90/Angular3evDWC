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
    private location: Location,
    private router: Router
  ) {}

  pelicula: any = "";
  reparto: string[] = [];
  recaudacion: number = 0;
  dinero: string = "";

  ngOnInit() {
    this.compruebaLogin();
    this.getPelicula();
  }

  // Este método debería habilitar el botón de Borrar película pero no funciona
  // TODO
  compruebaLogin() {
    if(sessionStorage.getItem("logged")=="true"){
      document.getElementById("btnBorrar").setAttribute("disabled", "false");
      }
  }

  // Obtenemos la película de la cual queremos ver los detalles
  getPelicula() {
    const id = this.route.snapshot.paramMap.get("id");
    this.peliculasService
      .getPelicula(id)
      .subscribe(
        peliSnapshot =>{
          (this.pelicula = peliSnapshot.payload.data() as Pelicula)
          
          // Obtenemos el reparto de la película y lo añadimos a un array para mostrarlo
          this.getReparto();
          
          // Calculamos la recaudación de la película suponiendo un precio por entrada de $5.5, y lo mostramos como dólares
          this.recaudacion = this.pelicula.Espectadores * 5.5;
          this.dinero = this.recaudacion.toLocaleString('us-US', { style: 'currency', currency: 'USD' });
        }
      );


  }

  // Obtenemos el reparto de la película
  getReparto() {
    this.reparto = [];
    this.pelicula.Reparto.forEach(element => {this.reparto.push(element)   
    });
  }

// Volvemos a la página anterior
  volver(){
    this.location.back();
  }

// Borramos la película. Nota: El método deletePelicula funciona.
  borrar(){
    const id = this.route.snapshot.paramMap.get("id");
    this.peliculasService.deletePelicula(id);
    this.router.navigateByUrl('/catalogo');

  }
}
