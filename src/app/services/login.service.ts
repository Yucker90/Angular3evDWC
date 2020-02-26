import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private firestore: AngularFirestore) {}

  compruebaUsuario(user: string, pass: string) {
    let logged: boolean;
    let passFB = this.firestore.collection("usuarios").doc(user);
    this.firestore
      .collection("usuarios")
      .doc(user)
      .snapshotChanges()
      .subscribe(userSnapshot => {
        console.log(userSnapshot.payload.get("password"));
        console.log(pass);
        logged = userSnapshot.payload.get("password") == pass;
        console.log(logged);
        return logged;
      });
    return logged;
  }
}
