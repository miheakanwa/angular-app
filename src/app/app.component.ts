import { Component } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Http } from '@angular/http';
import { AppState } from '../app/store';
import { Subscription } from 'rxjs/Subscription';
import { AppServiceService } from '../app/app-service.service';
import { PAGE_LOAD } from '../app/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private subscription: Subscription = new Subscription()
  title = 'app';
  searchResults: Array<any>;
  load_page: boolean = false;
  constructor(private http: Http, private appService: AppServiceService,
    private ngRedux: NgRedux<AppState>) { 
     // this.ngRedux.dispatch({type: PAGE_LOAD, pageLoad: true})


  const sub = this.ngRedux.select(state => {
    return state.appLanding.pageLoad;
  }).subscribe(result =>{
    this.load_page = result;
   // console.log(this.load_page);
  })

  this.subscription.add(sub);
  this.appService.loadResults();
  
}

}
