import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ListadoComponent } from './components/listado/listado.component';
import { HistoriaComponent } from './components/historia/historia.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'detalles/:id',
    component: DetallesComponent
  },
  {
    path: 'catalogo',
    component: ListadoComponent
  },
  {
    path: 'historia',
    component: HistoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
