import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

// Declare somes routes here...
const routes: Routes = [
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/dashboard/:id', component: DashboardComponent }, // Slug ":id"

  { path: 'home', component: HomeComponent },
  // Last routes after control all routes
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirection (si aucune réponse)
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
