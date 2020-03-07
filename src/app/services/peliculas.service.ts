import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Pelicula } from "../interfaces/pelicula";

@Injectable({
  providedIn: "root"
})
export class PeliculasService {
  constructor(private firestore: AngularFirestore) { }

  // Obtenemos las películas de la BD
  getPeliculas() {
    return this.firestore.collection('peliculas').snapshotChanges();
  }

  // Obtenemos la película con un id determinado
  getPelicula(peliculaId: string) {
    return this.firestore.collection('peliculas').doc(peliculaId).snapshotChanges();
  }

  // Añadimos una película a la BD con todos los datos
  addPelicula(data: { Titulo: string, Director: string, Year: number, Espectadores: number, Reparto: string[] }): void {
    this.firestore.collection('peliculas').add(data);
  }

  // Boramos la película que tenga un id determinado
  deletePelicula(peliculaId: string) {
    this.firestore.collection('peliculas').doc(peliculaId).delete();
  }

}