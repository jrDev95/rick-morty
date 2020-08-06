import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LayoutComponent } from './components/shared/layout/layout.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { DetailsComponent } from './pages/details/details.component';
import { AboutComponent } from './pages/about/about.component';




const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      { path:'', component: CharactersComponent },
      { path:'character/:id', component: DetailsComponent },
      { path:'about', component: AboutComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
