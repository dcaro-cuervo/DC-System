import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy, PopStateEvent } from '@angular/common';
import 'rxjs/add/operator/filter';
import { NavbarComponent } from '../../../core/navbar/navbar.component';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import PerfectScrollbar from 'perfect-scrollbar';

@Component({
  selector: 'app-client-center',
  templateUrl: './client-center.component.html',
  styleUrls: ['./client-center.component.css']
})
export class ClientCenterComponent implements OnInit {
	private _router: Subscription;
	private lastPoppedUrl: string;
	private yScrollStack: number[] = [];

	constructor( public location: Location, private router: Router) {}

	ngOnInit() {
		document.getElementsByTagName('body')[0].classList.remove();
		document.getElementsByTagName('body')[0].classList.add('dark-edition');

		var navbar = document.getElementsByTagName('nav')[0];
		navbar.classList.add('navbar-hide');

		const isWindows = navigator.platform.indexOf('Win') > -1 ? true : false;

		if (isWindows && !document.getElementsByTagName('body')[0].classList.contains('sidebar-mini')) {
			// if we are on windows OS we activate the perfectScrollbar function

			document.getElementsByTagName('body')[0].classList.add('perfect-scrollbar-on');
		} else {
          document.getElementsByTagName('body')[0].classList.remove('perfect-scrollbar-off');
		}
		const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      	const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');

		this.location.subscribe((ev:PopStateEvent) => {
			this.lastPoppedUrl = ev.url;
		});
		this.router.events.subscribe((event:any) => {
			if (event instanceof NavigationStart) {
				if (event.url != this.lastPoppedUrl)
				this.yScrollStack.push(window.scrollY);
			} else if (event instanceof NavigationEnd) {
	            if (event.url == this.lastPoppedUrl) {
	                this.lastPoppedUrl = undefined;
	                window.scrollTo(0, this.yScrollStack.pop());
	            } else
	            window.scrollTo(0, 0);
     		}
		});
      	this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
           elemMainPanel.scrollTop = 0;
           elemSidebar.scrollTop = 0;
      	});
      	if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
          	let ps = new PerfectScrollbar(elemMainPanel);
          	ps = new PerfectScrollbar(elemSidebar);
      	}
  	}

  	ngOnDestroy(){
		var navbar = document.getElementsByTagName('nav')[0];
		navbar.classList.remove('navbar-hide');
	}

	ngAfterViewInit() {
	  this.runOnRouteChange();
	}

	isMaps(path){
	  var titlee = this.location.prepareExternalUrl(this.location.path());
	  titlee = titlee.slice( 1 );
	  if(path == titlee){
	      return false;
	  }
	  else {
	      return true;
	  }
}
  runOnRouteChange(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemMainPanel = <HTMLElement>document.querySelector('.main-panel');
      let ps = new PerfectScrollbar(elemMainPanel);
      ps.update();

      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
      ps = new PerfectScrollbar(elemSidebar);
      ps.update();
    }
  }
  isMac(): boolean {
      let bool = false;
      if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
          bool = true;
      }
      return bool;
  }
}