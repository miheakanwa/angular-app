import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { SharedModule } from '../shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {EmployeeListResolverService} from './services/employee-list-resolver.service';
import {EmployeeResolverService} from './services/employee-resolver.service';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { EmployeeDetailResolverService } from './services/employee-detail-resolver.service';
import { StudentService } from './services/student.service';

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    EmployeeRoutingModule,
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [EmployeeResolverService, 
              EmployeeListResolverService, 
              StudentService,
              NgbAccordionConfig],
})
export class EmployeeModule { }
