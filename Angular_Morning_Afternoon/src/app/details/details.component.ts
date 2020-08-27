import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  flatMap:string;
  concatMap:string;
  exhaustMap:string;
  switchMap:string;

  constructor() { }

  ngOnInit(): void {
    this.flatMap='Applies a function to each observable which in turn returns an observable which is then merged e.g.Let a function be (i)=>i--i--| and our observables be 10,30,50.So one ouput can be 10--10--30--50--30--50' 
    this.concatMap='Projects each source value to an Observable which is merged in the output Observable, in a serialized fashion waiting for each one to complete before merging the next.Taking the same example answer would be serialised i.e. 10--10--30--30--50--50'
    this.exhaustMap='Projects each source value to an Observable which is merged in the output Observable only if the previous projected Observable has completed.e.g. If the time gap is large it may miss some observables or if last observable are not transformed it will not merge the next.With a time gap of 1 s our same example would give.10--10--30--30'
    this.switchMap='Projects each source value to an Observable which is merged in the output Observable, emitting values only from the most recently projected Observable.e.g.In the same scenario you may seem some observable outputs overlapping i.e 10--10--30--50--50'
  }

}
