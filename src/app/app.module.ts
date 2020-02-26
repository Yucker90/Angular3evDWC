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
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule} from 'angular-webstorage-service';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    FooterComponent,
    NavComponent,
    PagprincipalComponent,
    HistoriaComponent,
    ListadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    StorageServiceModule
  ],
  providers: [AngularFirestore, FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
