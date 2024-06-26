import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

const globalRoutes: Routes = [
  { path: "", component: HomeComponent },
  // { path: "", redirectTo:'/', pathMatch:'full' },
  { path:'**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(globalRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
