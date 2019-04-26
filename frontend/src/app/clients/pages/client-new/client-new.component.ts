import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { DialogStudyComponent } from '../dialog-study/dialog-study.component';

import { ClientService } from '../../shared/client.service';
import { StudyService } from '../../shared/study.service';

import { Client } from '../../shared/client';
import { Study } from '../../shared/study';

@Component({
  selector: 'app-client-new',
  templateUrl: './client-new.component.html',
  styleUrls: ['./client-new.component.css']
})
export class ClientNewComponent implements OnInit {

  clients: Client[];
  studies: Study[];

  constructor(
  	private clientService: ClientService,
    private studyService: StudyService,
  	private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  	this.getClients();
    this.getStudies();
  }

  getClients(): void {
  	this.clientService.getclients()
  		.subscribe(clients => this.clients = clients);
  }

  getStudies(): void {this.studyService.groupByYears();
    this.studyService.getStudies()
      .subscribe(studies => this.studies = studies);
  }

  generateYears(): void {
    var years: any[];

    this.studies.forEach( study => {
      const year = study.date.getFullYear();
      if (years[year]) {
        years[year].push(year);
      }
      else {
        years[year] = [];
        years[year].push(year);
      }
    })
  }

  goDashboard(): void {
  	this.router.navigate(['/client-center']);
  }

  add(firstName: string, lastName: string, hc: number, dni: number, address: string, age: number, sex: string,
    phone: number, hospitalOrigin: string): void {
    firstName = firstName.trim();
    lastName = lastName.trim();
    status = 'Iniciado';
    const fullName = firstName + ' ' + lastName;
    
    if (!firstName || !lastName) {return; }
    this.clientService.addclient({ firstName, lastName, hc, dni, address, age, sex, phone, status,
    hospitalOrigin, fullName } as Client)
    	.subscribe(client => { this.clients.push(client); });

    this.goDashboard();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = { study: new Study() };

    const dialogRef = this.dialog.open(DialogStudyComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getStudies();
    });
  }
}