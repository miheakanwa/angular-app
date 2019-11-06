import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { merge, Subject} from 'rxjs';
import { Observable } from 'rxjs/Observable'
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  map
} from 'rxjs/operators';
import {
  NgbDateStruct,
  NgbDateParserFormatter,
  NgbTypeahead
} from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
import { HomeServiceService } from './services/home-service.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription()
  resultsList: Array<any>;
  cnctStateArray: Array<any>;
  sampleForm: FormGroup;
  isFormSubmitted: boolean = false;
  formatter = (x: { name: string }) => x.name;

 

  @ViewChild('instanceSt')
  instanceSt: NgbTypeahead;
  focusState$ = new Subject<string>();
  clickState$ = new Subject<string>();


  constructor(private fb: FormBuilder, 
              private ngRedux: NgRedux<AppState>,
              private homeService: HomeServiceService) {

    this.homeService.getAllStates();

    this.ngRedux.select(
      state => {
        return state.landing.searchResults;
      }
    ).subscribe(result =>{
      this.resultsList = result;
    //  console.log(this.resultsList);
    })
    // this.ngRedux.select(state => {
    //   return state.appLanding.pageLoad;
    // }).subscribe(result =>{
    //   this.load_page = result;
    //   console.log(this.load_page);
    // })
   }

  ngOnInit() {
    this.creatrForm();
     
    
    this.ngRedux.select(

      state => {

        return state.landing.allStates;
      }
    ).subscribe(result =>{
     this.cnctStateArray = result;
     // console.log(result);
    })

//this.subscription.add(sub1);

this.
sampleForm.
valueChanges.
subscribe(form => {
 // console.log(this.sampleForm);
 // console.log(this.sampleForm.getRawValue());
  // if(this.sampleForm.get['state'].value){
    
  // }
});
  }

  creatrForm() {

    this.sampleForm = this.fb.group({

      state:[null, Validators.compose([Validators.required])],
      
      city:[null, Validators.compose([Validators.required])]

    })

  }

  searchState = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.clickState$.pipe(
      filter(() => !this.instanceSt.isPopupOpen())
    );
    const inputFocus$ = this.focusState$;
    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term =>
        (term === ''
          ? this.cnctStateArray
          : this.cnctStateArray.filter(v =>
            v.name.toLowerCase().startsWith(term.toLowerCase())
          )
        )
      )
    );
  };

  submitForm(){
   
    this.isFormSubmitted = true;
    if(this.sampleForm.valid){
      this.isFormSubmitted = false;
   //   console.log(this.sampleForm.controls['state'].value.name);
   // console.log(this.sampleForm.controls['state'].valid);
    }
    
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
