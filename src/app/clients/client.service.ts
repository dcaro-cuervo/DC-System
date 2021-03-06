import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Client } from './client';
import { MessageService } from './message.service';


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({ providedIn: 'root' })
export class ClientService {

  //URL to web api
  private clientsUrl = 'api/clients';

  constructor(
  	private http: HttpClient,
  	private messageService: MessageService) { }

  /** GET clients from the server */
  getclients(): Observable<Client[]> {
  	this.messageService.add('clientService: fetched clients');
  	return this.http.get<Client[]>(this.clientsUrl)
  		.pipe(
  			tap(clients => this.log('fetched clients')),
  			catchError(this.handleError('getclients', []))
		);
  }

  /** GET client by id. Return `undefined` when id not found */
  getclient404<Data>(id: number): Observable<Client> {
  	const url = `${this.clientsUrl}/?id=${id}`;

  	return this.http.get<Client[]>(url).pipe(
  		// returns a {0|1} element array
  		map(clients => clients[0]),
  		tap(h => {
  			const outcome = h ? `fetched` : `did not find`;
  			this.log(`${outcome} client id=${id}`);
  		}),
  		catchError(this.handleError<Client>('getclient id=${id}'))
	);
  }

  /** GET client by id. Will 404 if id not found */
  getclient(id: number): Observable<Client> {
  	const url = `${this.clientsUrl}/${id}`;
  	
  	this.messageService.add(`clientService: fetched client id=${id}`);
  	
  	return this.http.get<Client>(url).pipe(
  		tap(_ => this.log(`fetched client id=${id}`)),
  		catchError(this.handleError<Client>(`getclient id=${id}`))
	  );
  }

  /* GET clientes whose name contains search term */
  searchClients(term: string): Observable<Client[]> {
  	// if not search term, return empty client array
  	if (!term.trim()) {
  		return of([]);
  	}

  	return this.http.get<Client[]>(`${this.clientsUrl}/?name=${term}`).pipe(
  		tap(_ => this.log('found clientes matching "${term}"')),
  		catchError(this.handleError<Client[]>('searchclients', []))
	);
  }

  //////// Save methods //////////

  //* POST: add a new client to the server *//
  addclient(newclient: Client): Observable<Client> {
  	return this.http.post<Client>(this.clientsUrl, newclient, httpOptions).pipe(
  		tap((client: Client) => this.log(`added client w/ id=${client.id}`)),
  		catchError(this.handleError<Client>('addclient'))
	);
  }

  //* DELETE: delete a client from the server */
  deleteclient(clientToRemove: Client | number): Observable<Client> {
  	const id = typeof clientToRemove === 'number' ? clientToRemove : clientToRemove.id;
  	const url = `${this.clientsUrl}/${id}`;

  	return this.http.delete<Client>(url, httpOptions).pipe(
  		tap(_ => this.log(`delete client id=${id}`)),
  		catchError(this.handleError<Client>('deleteclient'))
	);
  }

  /** PUT: update the client on the server */
  updateClient(clientToUpdate: Client): Observable<any> { 	
  	return this.http.put(this.clientsUrl, clientToUpdate, httpOptions).pipe(
  		tap(_ => this.log(`update client id=${clientToUpdate.id}`)),
  		catchError(this.handleError<any>('updateclient'))
	);
  }

  /** Log a clientService message with the MessageService */
  private log(message: string) : void {
  	this.messageService.add(`clientService: ${message}`);
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
