import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { BehaviorSubject, Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment as ENV} from '../environments/environment';
import { switchMap, map, toArray } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HeroService {

	private subject: BehaviorSubject<Array<Hero>>;
	private mockUrl: string;

  constructor(private httpClient: HttpClient) { 
		this.subject = new BehaviorSubject(new Array());
		this.mockUrl = ENV.apiUrl + '/assets/heroes.json';
  }

  get heroes(): Observable<Array<Hero>>{
    return this.subject.asObservable();
  }

  loadMock(){
		this.httpClient.get<Array<Hero>>(this.mockUrl).pipe(
				switchMap((array) => from(array)),
				map((obj) => Object.assign(new Hero(),obj)),
				toArray()
		).subscribe((heroes) => this.subject.next(heroes));
  }

}
