import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { DetallesComponent } from "./components/detalles/detalles.component";
import { ListadoComponent } from "./components/listado/listado.component";
import { HistoriaComponent } from "./components/historia/historia.component";
import { FormpeliculaComponent } from "./components/formpelicula/formpelicula.component";
import { RecordsComponent } from "./components/records/records.component";
import { EditComponent } from "./components/edit/edit.component";

const routes: Routes = [
  {
    path: "",
    component: HistoriaComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "detalles/:id",
    component: DetallesComponent
  },
  {
    path: "catalogo",
    component: ListadoComponent
  },
  {
    path: "historia",
    component: HistoriaComponent
  },
  {
    path: "formpelicula",
    component: FormpeliculaComponent
  },
  {
    path: "records",
    component: RecordsComponent
  },
  { path: "edit:id", component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
