import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private firestore: AngularFirestore) {}
  logged: boolean = false;

  /* compruebaUsuario(user: string, pass: string) {
    this.firestore
      .collection("usuarios")
      .doc(user)
      .snapshotChanges()
      .subscribe(userSnapshot => {
        this.logged = userSnapshot.payload.get("password") == pass;
        console.log("Comprobación en servicio: " + this.logged);
        return this.logged;
      });
    return this.logged;
  }
  */

  async compruebaUsuario(user: string, pass: string) {
    const passfb = await this.firestore
      .collection("usuarios")
      .doc(user)
      .get()
      .toPromise();
    let login = passfb.data().password == pass;
    console.log(login);
    return login;
  }
}
