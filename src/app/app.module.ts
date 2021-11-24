import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CambioModule } from './modules';
import { LoginModule } from './modules';
import { CadastroModule } from './modules';
import { Page404Module } from './modules';
import { CookieService } from 'ngx-cookie-service';
import { AuthCookieService } from './services';
import { AuthGuardService } from './guards';

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
  providers: [
    CookieService,
    AuthCookieService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
