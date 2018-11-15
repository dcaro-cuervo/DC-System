import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientCenterComponent } from './client-center/client-center.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientNewComponent } from './client-new/client-new.component';
import { ClientSearchComponent } from './client-search/client-search.component';

const clientRoutes: Routes = [
	{
		path: 'client-center',
		component: ClientCenterComponent,
		children: [
			{
				path: '',
				component: ClientHomeComponent
			},
			{
				path: 'clients',
				component: ClientListComponent
			},
			{
				path: 'new',
				component: ClientNewComponent
			},
			{
				path: 'search',
				component: ClientSearchComponent
			},
			{
				path: ':id',
				component: ClientDetailComponent
	}]}
];

@NgModule({
  imports: [RouterModule.forChild(clientRoutes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
