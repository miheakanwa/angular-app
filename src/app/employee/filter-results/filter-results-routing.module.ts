import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilterResultsComponent } from './filter-results.component';
import { EmployeeResolverService } from '../services/employee-resolver.service';
import { EmployeeListResolverService } from '../services/employee-list-resolver.service';

const routes: Routes = [
  {path: '', component: FilterResultsComponent, resolve: {
    employee: EmployeeResolverService,
    empList: EmployeeListResolverService
  }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterResultsRoutingModule { }
