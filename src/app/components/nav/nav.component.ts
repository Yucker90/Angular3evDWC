import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Comprobamos que el usuario se ha logueado
    this.compruebaLogin();
  }

  compruebaLogin() {
    // Si se ha logueado, mostramos el botón para ir al formulario de creación de películas
    // y cambiamos el botón de Login por el de Cerrar sesión
    if (sessionStorage.getItem("logged") == "ok") {
      document.getElementById("formularioPelicula").hidden = false;
      document.getElementById("cerrarSesion").hidden = false;
      document.getElementById("login").hidden = true;

      // Si se ha refrescado la página con el login, cambiamos la variable para evitar un bucle infinito
      if (sessionStorage.getItem("navRefrescado") == "ok") {
        sessionStorage.setItem("navRefrescado", "not");
        window.location.reload();
      }
    }
  }

  // Para cerrar sesión, simplemente cambiamos el valor de la variable de sesión y refrescamos la página
  logout() {
    sessionStorage.setItem("logged", "not");
    sessionStorage.setItem("navRefrescado", "ok");
    window.location.reload();
  }

}
