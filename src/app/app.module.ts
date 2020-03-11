import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { PagprincipalComponent } from './components/pagprincipal/pagprincipal.component';
import { HistoriaComponent } from './components/historia/historia.component';
import { ListadoComponent } from './components/listado/listado.component';
import { AngularFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StorageServiceModule} from 'angular-webstorage-service';

import { DetallesComponent } from './components/detalles/detalles.component';
import { RecordsComponent } from './components/records/records.component';
import { FormpeliculaComponent } from './components/formpelicula/formpelicula.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    NavComponent,
    PagprincipalComponent,
    HistoriaComponent,
    ListadoComponent,
    LoginComponent,
    DetallesComponent,
    RecordsComponent,
    FormpeliculaComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    StorageServiceModule,
    FormsModule 
  ],
  providers: [AngularFirestore, FormBuilder, Location],
  bootstrap: [AppComponent]
})
export class AppModule { }
