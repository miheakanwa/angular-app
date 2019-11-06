import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { INITIAL_STATE } from './store';
import { AppServiceService } from '../app/app-service.service';
import { LandingModule } from '../app/landing/landing.module';
import { LandingComponent } from '../app/landing/landing.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared.module';

import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LandingModule,
    ReactiveFormsModule,
    SharedModule,
    // !environment.production ? StoreDevtoolsModule.instrument() : []
    
    //StoreRouterConnectingModule,
    //StoreRouterConnectingModule.forRoot(),
    // StoreDevtoolsModule.instrument({
    //   maxAge: 25 //  Retains last 25 states
    // }),
    
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
 
}
