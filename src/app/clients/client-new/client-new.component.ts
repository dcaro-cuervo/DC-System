import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import { ClientService } from '../client.service';
import { Client } from '../client';


@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {

  clients: Client[];

  constructor(
  	private clientService: ClientService,
  	private router: Router
  ) { }

  ngOnInit() {
  	this.getClients();
  }

  getClients(): void {
  	this.clientService.getclients()
  		.subscribe(clients => this.clients = clients);
  }

  goDashboard(): void {
  	this.router.navigate(['/client-center']);
  }

  add(firstName: string, lastName: string, hc: number, dni: number, adress: string, age: number, sex: string,
    phone: number, hospitalOrigin: string): void {
    firstName = firstName.trim();
    lastName = lastName.trim();
    status = 'Iniciado';
    const fullName = firstName + ' ' + lastName;
    
    if (!firstName || !lastName) {return; }
    this.clientService.addclient({ firstName, lastName, hc, dni, adress, age, sex, phone, status,
    hospitalOrigin, fullName } as Client)
    	.subscribe(client => { this.clients.push(client); });

    this.goDashboard();
  }
}
