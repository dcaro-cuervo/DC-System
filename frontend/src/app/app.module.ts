import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }                    from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { HttpClientModule }               from '@angular/common/http';
import { MatDialogModule, MatSnackBarModule, MatGridListModule, MatDividerModule, MatCardModule, MatButtonModule, MatSidenavModule, MatCheckboxModule, MatToolbarModule, MatMenuModule, MatIconModule, MatInputModule } from '@angular/material';

import { AppRoutingModule } from './/app-routing.module';
import { ClientsModule } from './clients/clients.module';
import { FlexLayoutModule } from "@angular/flex-layout";

// Services
import { UtilService } from './core/services/util.service';
import { CookieService } from 'ngx-cookie-service';

// Models
import { User } from './core/models/user.model';
import { ApiGuard } from './core/guards/api.guard';

// Components
import { HomeComponent } from './core/pages/home/home.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ShiftsComponent } from './shifts/shifts.component';
import { MessagesComponent } from './messages/pages/messages.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/pages/partials/footer/footer.component';
//import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { LoginComponent } from './core/pages/auth/login/login.component';
import { RegisterComponent } from './core/pages/auth/register/register.component';
import { ProfileComponent } from './core/pages/user/profile/profile.component';
import { DialogDefaultComponent } from './core/pages/dialogs/dialog-default/dialog-default.component';
import { DialogRemoveComponent } from './core/pages/dialogs/dialog-remove/dialog-remove.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ShiftsComponent,
    PageNotFoundComponent,
    MessagesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DialogDefaultComponent,
    DialogRemoveComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    ClientsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatInputModule,
    MatDividerModule,
    MatCardModule,
    MatGridListModule,
    MatSnackBarModule,
    MatDialogModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    DialogDefaultComponent,
    DialogRemoveComponent,
  ],
  providers: [
    UtilService,
    CookieService,
    ApiGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { //https://stackoverflow.com/questions/39101865/angular-2-inject-dependency-outside-constructor
  constructor(injector: Injector) {
    AppInjector = injector;
  }
}
export let AppInjector: Injector;