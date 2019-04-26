import { Component, ElementRef, OnInit, Inject, Renderer, ViewChild } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

import { slideInAnimation } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slideInAnimation ]
})
export class AppComponent {
  title = 'DC System';
  
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar: NavbarComponent;

  constructor( private renderer : Renderer, private router: Router, @Inject(DOCUMENT,) 
    private document: any, private element : ElementRef, public location: Location) {}
  
  ngOnInit() {
      var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
      this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
          if (window.outerWidth > 991) {
              window.document.children[0].scrollTop = 0;
          }else{
              window.document.activeElement.scrollTop = 0;
          }
          this.navbar.sidebarClose();

          this.renderer.listenGlobal('window', 'scroll', (event) => {
              const number = window.scrollY;
              var _location = this.location.path();
              _location = _location.split('/')[2];
               if (number > 150 || window.pageYOffset > 150) {
                  navbar.classList.remove('navbar-transparent');
              } else if (_location !== 'login' && this.location.path() !== '/nucleoicons') {
                  // remove logic
                  navbar.classList.add('navbar-transparent');
              }
          });
      });
  }

  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
