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
    { path: '/client-center/new', title: 'Nueva Derivación',  icon:'person_add', class: '' },
    { path: '/client-center/clients', title: 'Listado Derivaciones',  icon:'content_paste', class: '' }
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
