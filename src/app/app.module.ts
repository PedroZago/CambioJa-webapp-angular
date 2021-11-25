import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthCookieService, TokenInterceptorService } from './services';
import { AuthGuardService } from './guards';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
