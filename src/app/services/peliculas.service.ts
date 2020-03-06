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

  getPeliculas() {
    return this.firestore.collection('peliculas').snapshotChanges();
  }

  getPelicula(peliculaId: string) {
    return this.firestore.collection('peliculas').doc(peliculaId).snapshotChanges();
  }

  addPelicula(data: {Titulo: string, Director: string, Year: number, Espectadores: number, Reparto: string[]}): void {
    this.firestore.collection('peliculas').add(data);
  }

  deletePelicula(peliculaId: string){
    this.firestore.collection('peliculas').doc(peliculaId).delete();
  }

}