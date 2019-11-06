import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeContactInfoComponent } from './employee-contact-info.component';


const routes: Routes = [
  {path:'', component: EmployeeContactInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeContactInfoRoutingModule { }
