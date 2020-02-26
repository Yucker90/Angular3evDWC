import { Component, OnInit, Inject } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { WebStorageService, SESSION_STORAGE } from "angular-webstorage-service";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private loginservice: LoginService,
    private formBuilder: FormBuilder,
    @Inject(SESSION_STORAGE) private storage: WebStorageService
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      user: new FormControl(""),
      pass: new FormControl("")
    });
  }

  async compruebaUser() {
    let user = this.formulario.get("user").value;
    let pass = this.formulario.get("pass").value;
    let logged = this.loginservice.compruebaUsuario(user, pass);
    if (logged) {   
      sessionStorage.setItem("logged", "true");
      // REDIRECT TO MAIN
    }
  }
}
