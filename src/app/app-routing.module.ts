import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LayoutComponent } from './components/shared/layout/layout.component';
import { CharactersComponent } from './pages/characters/characters.component';



const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children:[
      {path:'', component: CharactersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
