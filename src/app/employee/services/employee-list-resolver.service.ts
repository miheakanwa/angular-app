import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router/src/interfaces';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeListResolverService implements Resolve<any> {
  constructor(private http: Http) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.http.get('http://dummy.restapiexample.com/api/v1/employees').map(data => {
     return  data.json()}, err => {

     })
  }

  }
