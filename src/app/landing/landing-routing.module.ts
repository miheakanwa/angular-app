import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';

const LandingRoutes: Routes = [
  {path:'', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(LandingRoutes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
