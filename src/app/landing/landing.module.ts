import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppLandingPage,ApplandingReducer,APPLANDING_INITIAL_STATE } from '../landing/store';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from '../landing/landing.component';
import { NgRedux } from '@angular-redux/store';
import { FormsModule } from '@angular/forms';
import {NgbModule, NgbDatepickerConfig, NgbDateParserFormatter} from '@ng-bootstrap/ng-bootstrap';
import { DateParseFormatter } from '../../utils/ngb-date-fr-parser-formatter';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    LandingRoutingModule
  ],
    providers: [
//  { provide: NgbDateParserFormatter, useClass: DateParseFormatter },
{provide: NgbDateParserFormatter, useClass: DateParseFormatter}
]
})
export class LandingModule {
  // constructor(ngRedux: NgRedux<AppLandingPage>) {
  //   ngRedux.configureStore(ApplandingReducer, APPLANDING_INITIAL_STATE);
  // }
 }
