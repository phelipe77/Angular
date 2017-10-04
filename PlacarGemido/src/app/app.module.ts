import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MaterializeModule } from 'angular2-materialize';
import { AdicionarComponent } from './adicionar/adicionar.component';
import { routing } from './app.routing';
import { CarregarDadosService } from './carregar-dados.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdicionarComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [CarregarDadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
