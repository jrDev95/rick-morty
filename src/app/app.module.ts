import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LayoutComponent } from './components/shared/layout/layout.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { CharactersCardComponent } from './components/characters-card/characters-card.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { ShowFiltersComponent } from './components/show-filters/show-filters.component';
import { DetailsComponent } from './pages/details/details.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LayoutComponent,
    FooterComponent,
    CharactersListComponent,
    CharactersCardComponent,
    CharactersComponent,
    ShowFiltersComponent,
    DetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
