import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firestore: AngularFirestore) { }

  compruebaUsuario(user: string, pass: string): boolean{
    let logged: boolean = false;
    this.firestore.collection('usuarios').doc(user).snapshotChanges().subscribe(
      (userSnapshot) => logged = userSnapshot.payload.data() == pass          
    );
    return logged;
  }

}
