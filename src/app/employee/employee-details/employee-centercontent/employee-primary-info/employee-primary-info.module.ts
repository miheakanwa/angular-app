import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeePrimaryInfoRoutingModule } from './employee-primary-info-routing.module';
import { EmployeePrimaryInfoComponent } from './employee-primary-info.component';
import { EmployeeDetailResolverService } from '../../../services/employee-detail-resolver.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../../../shared.module';

@NgModule({
  declarations: [EmployeePrimaryInfoComponent],
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    EmployeePrimaryInfoRoutingModule,
    SharedModule
  ],
  providers:[
    EmployeeDetailResolverService
  ]
})
export class EmployeePrimaryInfoModule { }
