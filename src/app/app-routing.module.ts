import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "../app/login/login.component";
import { PageNotFoundComponent } from "../app/page-not-found/page-not-found.component"
import { DashboardModule } from "./dashboard/dashboard.module";
import { RegisterComponent } from "./register/register.component";

export const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"register", component: RegisterComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {path:"**", component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), DashboardModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
