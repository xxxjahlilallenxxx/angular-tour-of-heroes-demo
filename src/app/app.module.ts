import { NgModule, importProvidersFrom } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './Services/in-memory-data.service';

import { HeroesComponent } from './Hero/heroes/heroes.component';
import { HeroDetailComponent } from './Hero/hero-detail/hero-detail.component';
import { MessagesComponent } from './Hero/messages/messages.component';
import { DashboardComponent } from './Hero/dashboard/dashboard.component';
import { HeroSearchComponent } from './Hero/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {dataEncapsulation: false}),
    InMemoryWebApiModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
