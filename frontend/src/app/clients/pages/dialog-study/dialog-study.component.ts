import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';

import * as moment from 'moment';

import { StudyService } from '../../shared/study.service';
import { Study } from '../../shared/study';

export interface DialogData {
	study: Study;
}

@Component({
  selector: 'app-dialog-study',
  templateUrl: './dialog-study.component.html',
  styleUrls: ['./dialog-study.component.css'],
  providers: [
	{provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
    
    // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
    // `MatMomentDateModule` in your applications root module. We provide it at the component level
    // here, due to limitations of our example generation script.
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})
export class DialogStudyComponent implements OnInit {

  public newStudy: Study;

  //initialize the datepicker with the current date and time.
  date = moment();

  constructor(
  	private studyService: StudyService,
  	private adapter: DateAdapter<any>,
  	private dialogRef: MatDialogRef<DialogStudyComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
  	this.adapter.setLocale('es');
  }

  add(name: string, medic: string, lender: string, audit: string, evolutionAudit: string, 
  	state: string): void {

    var date = this.date.toDate();

    name = name.trim();

    if (!name) {return; }
    this.studyService.addStudy({ date, name, medic, lender, audit, evolutionAudit, state } as Study)
    	.subscribe(study => { this.data.study = study; });

  	this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }

  events: string[] = [];

  addEvent(event: MatDatepickerInputEvent<Date>) {
  	var nose = moment(event.value)
    this.events.push(`${nose.format("DD/MM/YYYY")}`);
  }
}
