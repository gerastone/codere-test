import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { appEffects } from './infraestructure/store/effects/app.effects';
import { appReducers } from './infraestructure/store/reducer/app.reducer';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePage } from './application/pages/home/home.page';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ShowCardComponent } from './application/components/show-card/show-card.component';
import { ShowDetailPage } from './application/pages/show-detail/show-detail.page';
import { SearchPipe } from './application/pipes/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ShowDetailPage,
    ShowCardComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    CommonModule,
    FormsModule,
    StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability: false,
        strictActionSerializability: false
      }
    }),
    EffectsModule.forRoot(appEffects),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})


export class AppModule { }


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}