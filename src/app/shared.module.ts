import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { RouterModule }             from "@angular/router";
import { SubmitDirective } from './submit.directive';
import { StoreModule } from '@ngrx/store';
import { rootReducer, INITIAL_STATE } from './store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [SubmitDirective],
  imports: [
    HttpModule,
    NgbModule,
    FormsModule,
    NgReduxModule,
    RouterModule,
    StoreModule.forRoot({rootReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class SharedModule { 
  constructor(ngRedux: NgRedux<{}>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
