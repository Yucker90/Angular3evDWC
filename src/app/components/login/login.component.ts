import { Component, OnInit, Inject } from "@angular/core";
import { LoginService } from "src/app/services/login.service";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';

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
    private router: Router
  ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      user: new FormControl(""),
      pass: new FormControl("")
    });

    // Explicación de éste método debajo
    this.redireccionPorLogin();
  }

  // Este método se usa en la carga del componente. Comprobamos si el usuario se ha logueado
  // y si es así, lo redireccionamos a la página principal 
  redireccionPorLogin() {
    if (sessionStorage.getItem("logged") == "ok")
      this.router.navigateByUrl('/');
  }

  // Comprobamos que el user y el pass son correctos
  // user: admin - pass: altair123
  async compruebaUser() {
    let user = this.formulario.get("user").value;
    let pass = this.formulario.get("pass").value;
    let logged = this.loginservice.compruebaUsuario(user, pass);
    if (logged) {

      // Si nos hemos logueado con éxito, guardamos una variable de sesión que nos servirá para dar
      // "privilegios" de administrador
      sessionStorage.setItem("logged", "ok");

      // Cargamos esta segunda variable para evitar un refresco de página infinito
      sessionStorage.setItem("navRefrescado", "ok");
      
      // Refrescamos la página para que cambie el header
      window.location.reload();
    }

  }
}
