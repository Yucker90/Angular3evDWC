import { Component, OnInit } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { FormGroupDirective } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;

  constructor(
    private loginservice: LoginService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      user: new FormControl(""),
      pass: new FormControl("")
    });
  }

  compruebaUser() {
    if (
      this.loginservice.compruebaUsuario(
        this.formulario.get("user").value,
        this.formulario.get("pass").value
      )
    ) {
      localStorage.setItem("logged", "true");
    }
  }
}
