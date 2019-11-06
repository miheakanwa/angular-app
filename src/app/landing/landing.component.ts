import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { DateParseFormatter } from '../../utils/ngb-date-fr-parser-formatter';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

model: any;
  firstName: string;
  lastName: string;
  endDate:any;
  student: any;

  studentsList: any;

  product: any;
  productList: any;




















  now: Date = new Date();
  //sortValue: string='name';
  items:Array<any>;
  constructor(private ngRedux: NgRedux<AppState>) {
    // this.ngRedux.select(
    //   state => {
    //     return state.landing.searchResults;
    //   }
    // ).subscribe(result =>{
    //   this.items = result;

    //   this.items.forEach(function(element) {
    //     let dateF = new Date();
    //     element.date = dateF;
    //   });
    // })




    this.student = {
      id: 40,

      firstName: 'BHargav',

      lastName: 'Ram',

      email: 'bhargavr445@gmail.com',

      marks: '30'

    }




    /////////////////////////////////////
    this.studentsList = [
      {
        id: 11,

        firstName: 'Sai',

        lastName: 'B',

        email: 'sai@gmail.com',

        marks: '30'
      },
      {
        id: 12,

        firstName: 'SRavani',

        lastName: 'R',

        email: 'SRavani@gmail.com',

      marks: '40'
      },
      {
        id: 13,

        firstName: 'prasanna',

        lastName: 'R',

        email: 'prasanna@gmail.com',

        marks: '50'
      }
    ]

    // this.studentsList = [
    //   {

    //   },
    //   {

    //   },
    //   {

    //   }
    // ]

this.product = {

    productid: 10,
    productName: 'Alexa',
    productDesc: 'tech Gadget',

}


this.productList = [
  {
    productid: 10,
    productName: 'Alexa',
    productDesc: 'tech Gadget',
    rating:5

  },
  {
    productid: 11,
    productName: 'X-box',
    productDesc: 'Gaming',
    rating: 2
  },
  {
    productid: 12,
    productName: 'Apple',
    productDesc: 'Phone',
    rating: 3
  }
]


console.log(this.student);
console.log(this.studentsList);
console.log(this.product);
console.log(this.productList);


// for(let i=0; i<=1000; i++){

//   console.log(i);

// }

   }




  ngOnInit() {
    console.log(this.now);
    
  }

  sortResultsBy(sortValue){
    console.log(sortValue);
  }


  checkdate(){

    let dfp: DateParseFormatter = new DateParseFormatter();
     let selectedDate = dfp.format(this.model);
     console.log(this.model);
     console.log(this.endDate);
    console.log(new Date(selectedDate));
     console.log(new Date(dfp.format(this.endDate)));

    if((new Date(dfp.format(this.model)))>(new Date(dfp.format(this.endDate)))){
      console.log('Wrong');
    } else {
      console.log('Correct');
    }
  }

}
