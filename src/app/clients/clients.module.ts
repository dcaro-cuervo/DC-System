import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientCenterComponent } from './client-center/client-center.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientNewComponent } from './client-new/client-new.component';
import { ClientSearchComponent } from './client-search/client-search.component';

import { SidebarComponent } from './sidebar/sidebar.component';

import { ClientsRoutingModule } from './clients-routing.module';

import {
	MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
  MatTooltipModule,
  MatExpansionModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

import { ClientNavbarComponent } from './client-navbar/client-navbar.component';
import { DialogStudyComponent } from './dialog-study/dialog-study.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatExpansionModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ClientsRoutingModule
  ],
  declarations: [
  	ClientCenterComponent,
  	ClientDetailComponent,
  	ClientHomeComponent,
  	ClientListComponent,
    ClientNewComponent,
    ClientSearchComponent,
  	SidebarComponent,
  	ClientNavbarComponent,
  	DialogStudyComponent
  ],
  entryComponents: [DialogStudyComponent]
})
export class ClientsModule { }
