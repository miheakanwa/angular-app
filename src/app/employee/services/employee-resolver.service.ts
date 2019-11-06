import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<any>{
  constructor(private http: Http) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<any> | Promise<any> | any {
    return this.http.get('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_titlecase.json')
      .map(data => {
        return data.json();
      }, err => {
       // console.log('API CALL FAILED');
      })

  }
}
