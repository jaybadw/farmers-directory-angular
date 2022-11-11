import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FarmersDetailsComponent } from './modules/farmers-details/farmers-details.component';

import { CardComponent } from './shared/components/card/card.component';
import { FarmersComponent } from './modules/pages/farmers/farmers.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptInterceptor } from './services/intercept.interceptor';
import { LivestockComponent } from './modules/livestock/livestock.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
     CardComponent,

    FarmersComponent,
    FooterComponent,

    FarmersDetailsComponent,
      LivestockComponent
  ],

  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ],
  providers: [
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass: InterceptInterceptor,
    //   multi: true,
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
