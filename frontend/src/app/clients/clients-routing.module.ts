import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientCenterComponent } from './pages/client-center/client-center.component';
import { ClientDetailComponent } from './pages/client-detail/client-detail.component';
import { ClientHomeComponent } from './pages/client-home/client-home.component';
import { ClientListComponent } from './pages/client-list/client-list.component';
import { ClientNewComponent } from './pages/client-new/client-new.component';
import { ClientSearchComponent } from './pages/client-search/client-search.component';

//Guards
import { ApiGuard } from '../core/guards/api.guard';
const clientRoutes: Routes = [
	{
		path: 'client-center',
		component: ClientCenterComponent,
		children: [
			{
				path: '',
				component: ClientHomeComponent, canActivate:[ApiGuard], pathMatch: 'full' ,
			},
			{
				path: 'clients',
				component: ClientListComponent, canActivate:[ApiGuard], pathMatch: 'full' ,
			},
			{
				path: 'new',
				component: ClientNewComponent, canActivate:[ApiGuard], pathMatch: 'full' ,
			},
			{
				path: 'search',
				component: ClientSearchComponent, canActivate:[ApiGuard], pathMatch: 'full' ,
			},
			{
				path: ':id',
				component: ClientDetailComponent, canActivate:[ApiGuard], pathMatch: 'full' ,
	}]}
];

@NgModule({
  imports: [RouterModule.forChild(clientRoutes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
