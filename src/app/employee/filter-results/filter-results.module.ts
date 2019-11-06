import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterResultsRoutingModule } from './filter-results-routing.module';
import { FilterResultsComponent } from './filter-results.component';
import { FilterComponent } from './filter/filter.component';
import { ResultsComponent } from './results/results.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [FilterResultsComponent, FilterComponent, ResultsComponent],
  imports: [
    CommonModule,
    FilterResultsRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class FilterResultsModule { }
