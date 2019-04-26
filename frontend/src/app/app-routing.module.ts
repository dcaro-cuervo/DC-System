import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientCenterComponent } from './clients/pages/client-center/client-center.component';
import { HomeComponent } from './core/pages/home/home.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

//Auth
import { LoginComponent } from './core/pages/auth/login/login.component';

//Guards
import { ApiGuard } from './core/guards/api.guard';

//Model
import { Role } from './core/models/role.model';

//User
import { ProfileComponent } from './core/pages/user/profile/profile.component';

const routes = [
  	{ path: 'home',      			    component: HomeComponent },
  	{ path: 'client-center',      component: ClientCenterComponent },
  	{ path: 'shifts',             component: ShiftsComponent, canActivate:[ApiGuard], pathMatch: 'full' },
  	
	  { path: 'login',              component: LoginComponent,pathMatch: 'full' },

	  { path: 'user/update',        component: ProfileComponent, canActivate:[ApiGuard], data: { roles: [Role.Admin] }, pathMatch: 'full' },

	  { path: '', 									redirectTo: '/home', pathMatch: 'full' },
  	{ path: '**',									component: PageNotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(routes)],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }