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

  compruebaLogin(){
    if(sessionStorage.getItem("logged")=="true"){
      document.getElementById("formularioPelicula").hidden=false;
    }
  }

}
