import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeContactInfoRoutingModule } from './employee-contact-info-routing.module';
import { EmployeeContactInfoComponent } from './employee-contact-info.component';
import { SharedModule } from '../../../../shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EmployeeContactInfoComponent],
  imports: [
    CommonModule,
    EmployeeContactInfoRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EmployeeContactInfoModule { 

}
