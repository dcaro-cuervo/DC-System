import { Component, OnInit }							 from '@angular/core';
import { Router }                          from '@angular/router';
import { Observable, Subject}							 from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {
  clients$: Observable<Client[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private clientService: ClientService,
    private route: Router
  ) { }

  // Push a search term into the observable stream.
  search(term: string ): void {
  	this.searchTerms.next(term);

    this.route.navigate(['/client-center/clients', { sTerms: term }]);
  }

  ngOnInit() {
  	
  }



}
