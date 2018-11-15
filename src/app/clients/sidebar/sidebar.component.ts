import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/client-center/new', title: 'New User',  icon:'person', class: '' },
    { path: '/client-center/clients', title: 'User List',  icon:'content_paste', class: '' },
    { path: '/nose', title: 'Typography',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  };

  isMobileMenu() {
      if (window.innerWidth > 991) {
          return false;
      }
      return true;
  };

  onSelect(itemSelected: string): void {
    for (let item of ROUTES) {
      item.class = (item.title == itemSelected ? 'active' : '');
    }
  };
}
