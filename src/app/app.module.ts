import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CambioModule } from './cambio';
import { LoginModule } from './login';
import { CadastroModule } from './cadastro';
import { Page404Module } from './page404';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CambioModule,
    LoginModule,
    CadastroModule,
    HttpClientModule,
    Page404Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
