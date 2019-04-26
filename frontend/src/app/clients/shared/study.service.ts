import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, from } from 'rxjs';
import { catchError, map, tap, groupBy, mergeMap, toArray } from 'rxjs/operators';

import * as moment from 'moment';

import { Study } from './study';

import { MessageService } from '../../messages/shared/message.service';

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  //URL to web api
  private studiesUrl = 'http://localhost:3000/api/studies';

  constructor(
  	private http: HttpClient,
  	private messageService: MessageService ) { }

  groupByYears(): Observable<any> {
    const people = [
  { name: 'Sue', age: 25 },
  { name: 'Joe', age: 30 },
  { name: 'Frank', age: 25 },
  { name: 'Sarah', age: 35 }
];
//emit each person
const source = from(this.http.get<Study>(this.studiesUrl));
//group by age
const example = source.pipe(
  groupBy(person => person.medic),
  // return each item in group as array
  mergeMap(group => group.pipe(toArray()))
);
/*
  output:
  [{age: 25, name: "Sue"},{age: 25, name: "Frank"}]
  [{age: 30, name: "Joe"}]
  [{age: 35, name: "Sarah"}]
*/
const subscribe = example.subscribe(val => console.log(val));

return example;
  }

  /** GET studies from the server */
  getStudies(): Observable<Study[]> {
  	this.messageService.add('studyService: fetched studies');
  	return this.http.get<Study[]>(this.studiesUrl)
  		.pipe(
  			tap(clients => this.log('fetched studies')),
  			catchError(this.handleError('getstudies', []))
		);
  }

  /** GET study by id. Return `undefined` when id not found */
  getstudy404<Data>(id: number): Observable<Study> {
  	const url = `${this.studiesUrl}/?id=${id}`;

  	return this.http.get<Study[]>(url).pipe(
  		// returns a {0|1} element array
  		map(studies => studies[0]),
  		tap(h => {
  			const outcome = h ? `fetched` : `did not find`;
  			this.log(`${outcome} study id=${id}`);
  		}),
  		catchError(this.handleError<Study>('getStudy id=${id}'))
	);
  }

  /** GET study by id. Will 404 if id not found */
  getStudy(id: number): Observable<Study> {
  	const url = `${this.studiesUrl}/${id}`;
  	
  	this.messageService.add(`studyService: fetched study id=${id}`);
  	
  	return this.http.get<Study>(url).pipe(
  		tap(_ => this.log(`fetched study id=${id}`)),
  		catchError(this.handleError<Study>(`getStudy id=${id}`))
	  );
  }

  /* GET studies whose name contains search term */
  searchStudies(term: string): Observable<Study[]> {
  	// if not search term, return empty study array
  	if (!term.trim()) {
  		return of([]);
  	}

  	return this.http.get<Study[]>(`${this.studiesUrl}/?firstName=${term}`).pipe(
  		tap(_ => this.log('found studies matching "${term}"')),
  		catchError(this.handleError<Study[]>('searchStudies', []))
	);
  }

  //////// Save methods //////////

  //* POST: add a new study to the server *//
  addStudy(newStudy: Study): Observable<Study> {
  	return this.http.post<Study>(this.studiesUrl, newStudy, httpOptions).pipe(
  		tap((study: Study) => this.log(`added study w/ id=${study._id}`)),
  		catchError(this.handleError<Study>('addStudy'))
	);
  }

  //* DELETE: delete a study from the server */
  deleteStudy(studyToRemove: Study | number): Observable<Study> {
  	const id = typeof studyToRemove === 'number' ? studyToRemove : studyToRemove._id;
  	const url = `${this.studiesUrl}/${id}`;

  	return this.http.delete<Study>(url, httpOptions).pipe(
  		tap(_ => this.log(`delete study id=${id}`)),
  		catchError(this.handleError<Study>('deleteStudy'))
	);
  }

  /** PUT: update the study on the server */
  updateStudy(studyToUpdate: Study): Observable<any> { 	
  	return this.http.put(this.studiesUrl, studyToUpdate, httpOptions).pipe(
  		tap(_ => this.log(`update study id=${studyToUpdate._id}`)),
  		catchError(this.handleError<any>('updateStudy'))
	);
  }

  /** Log a studyService message with the MessageService */
  private log(message: string) : void {
  	this.messageService.add(`studyService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  handleError<T> (operation = 'operation', result?: T) {
  	return (error: any): Observable<T> => {
  		// TODO: send the error to remote logging infrastructure
	    console.error(error); // log to console instead
	 
	    // TODO: better job of transforming error for user consumption
	    this.log(`${operation} failed: ${error.message}`);
	 
	    // Let the app keep running by returning an empty result.
	    return of(result as T);
  	};
  }
}
