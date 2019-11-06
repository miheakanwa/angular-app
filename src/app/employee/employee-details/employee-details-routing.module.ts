import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import { EmployeeDetailResolverService } from '../services/employee-detail-resolver.service';


const routes: Routes = [
  {path: '', component: EmployeeDetailsComponent, 
             resolve:{empDetails: EmployeeDetailResolverService},
              children:[
                        {path: 'infoPanel', 
                                loadChildren:'./employee-centercontent/employee-primary-info/employee-primary-info.module#EmployeePrimaryInfoModule'},
                        {path: 'contactPanel', 
                                loadChildren:'./employee-centercontent/employee-contact-info/employee-contact-info.module#EmployeeContactInfoModule'}

  ]}
];

  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailsRoutingModule { }
