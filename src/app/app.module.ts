import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './shared/layout/menu/menu.component';

import { HomeModule } from './components/home/home.module';
import { ExtratoModule } from './components/extrato/extrato.module';
import { ToastService } from './shared/services/toast.service';
import { HttpRequestInterceptor } from './shared/helpers/http-request.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    ExtratoModule,
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    ToastService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ]
})
export class AppModule { }
