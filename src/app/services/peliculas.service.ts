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
  constructor(private firestore: AngularFirestore) {}

getPeliculas(){
  return this.firestore.collection('peliculas').snapshotChanges();
}

  /* 
  getPeliculas() {
    let peliculas: any[] = [];
    this.firestore
      .collection("peliculas")
      .snapshotChanges()
      .subscribe(peliculaSnapshot => {
        peliculas = [];
        peliculaSnapshot.forEach(peliculaData => {
          peliculas.push(peliculaData.payload.doc.data());
          console.log("Cargada: " + peliculaData.payload.doc.id);
        });
      });
    return peliculas;
  }
*/
  get5PeliculasTaquilleras() {}
}
