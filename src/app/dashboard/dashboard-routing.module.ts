import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuardGuard } from "../guard/auth-guard.guard"
export const routes: Routes = [
    {path:'dashboard', component:LayoutComponent, canActivate:[AuthGuardGuard],
    children:[
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component:HomeComponent},
        { path: 'admin', component: AdminComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }