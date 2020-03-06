import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.compruebaLogin();
  }

  compruebaLogin() {
    if (sessionStorage.getItem("logged") == "true") {
      document.getElementById("formularioPelicula").hidden = false;
      document.getElementById("cerrarSesion").hidden = false;
      document.getElementById("login").hidden = true;

      if (sessionStorage.getItem("navRefrescado") == "true") {
        sessionStorage.setItem("navRefrescado", "false");
        window.location.reload();
      }
    }
  }

logout() {
  sessionStorage.setItem("logged", "false");
  sessionStorage.setItem("navRefrescado", "true");
  window.location.reload();
}

}
