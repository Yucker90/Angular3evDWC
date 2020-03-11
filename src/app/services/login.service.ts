import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private firestore: AngularFirestore) {}
  logged: boolean = false;

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
