import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LicitacijaComponent } from './homepage/licitacija/licitacija.component';
import { AnalyticsComponent } from './homepage/analytics/analytics.component';
import { VozilaComponent } from './homepage/vozila/vozila.component';
import { AppRoutingModule } from './app-routing.module';
import { NePostojiComponent } from './ne-postoji/ne-postoji.component';
import { FormsModule } from "@angular/forms";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import {getAuth, provideAuth} from "@angular/fire/auth";
import { TabelaComponent } from './homepage/vozila/tabela/tabela.component';
import {AngularFireDatabaseModule} from "@angular/fire/compat/database";
import {HttpClientModule} from "@angular/common/http";
import { DodajvoziloComponent } from './homepage/vozila/dodajvozilo/dodajvozilo.component';
import { LoadingComponent } from './homepage/vozila/tabela/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    LicitacijaComponent,
    AnalyticsComponent,
    VozilaComponent,
    NePostojiComponent,
    TabelaComponent,
    DodajvoziloComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
