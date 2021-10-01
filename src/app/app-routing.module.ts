import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'animal', component: AnimalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
