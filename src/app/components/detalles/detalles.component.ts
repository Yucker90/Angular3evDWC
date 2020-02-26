import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/services/peliculas.service';
import { Pelicula } from 'src/app/interfaces/pelicula';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  constructor(private peliculasService: PeliculasService) { }

  pelicula: Pelicula;

  ngOnInit() {
  }

  getPelicula(){
    this.peliculasService.getPelicula("1");
  }
  
}
