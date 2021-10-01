import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MoviesModule } from './movies/movies.module';
import { AnimalComponent } from './animal/animal.component';
import { UsersComponent } from './users/users.component'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AnimalComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MoviesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
