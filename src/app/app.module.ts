import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostraCartasComponent } from './components/mostra-cartas/mostra-cartas.component';
import { MostraNaipesComponent } from './components/mostra-naipes/mostra-naipes.component';

@NgModule({
  declarations: [
    AppComponent,
    MostraCartasComponent,
    MostraNaipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
