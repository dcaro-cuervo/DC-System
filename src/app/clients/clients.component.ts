import { Component, OnInit } from '@angular/core';

import { Client } from '../client';
import { ClientService } from '../client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  	this.getClients();
  }

  getClients(): void {
  	this.clientService.getclients()
  		.subscribe(clients => this.clients = clients);
  }

  add(name: string): void {
  	name = name.trim();
  	if (!name) { return };

  	this.clientService.addclient({ name } as Client).subscribe(client => { this.clients.push(client); });
  }

  delete(clientToDelete: Client): void {
  	this.clients = this.clients.filter(client => client !== clientToDelete);
  	this.clientService.deleteclient(clientToDelete).subscribe();
  }
}
