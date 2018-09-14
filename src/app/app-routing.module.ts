import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientsComponent } from './clients/clients.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientNewComponent } from './client-new/client-new.component';

const routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'clients', component: ClientsComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'shifts', component: ShiftsComponent },
	{ path: 'detail/:id', component: ClientDetailComponent },
	{ path: 'new', component: ClientNewComponent 
}];

@NgModule({
	imports: [ RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }