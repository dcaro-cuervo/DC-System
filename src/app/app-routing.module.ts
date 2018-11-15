import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientCenterComponent } from './clients/client-center/client-center.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes = [
  	{ path: 'dashboard', component: DashboardComponent },
  	{ path: 'client-center', component: ClientCenterComponent },
  	{ path: 'shifts', component: ShiftsComponent },
  	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }