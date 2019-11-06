import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { EmployeeResolverService } from './services/employee-resolver.service';
import { EmployeeListResolverService } from './services/employee-list-resolver.service'


const routes: Routes = [
  {
    path: '', component: EmployeeComponent, children: [

      { path: 'emp-search', loadChildren: './filter-results/filter-results.module#FilterResultsModule' },
      { path: 'emp-details', loadChildren: './employee-details/employee-details.module#EmployeeDetailsModule' }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
