import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/inscription', title: 'Inscriptions',  icon:'pe-7s-id', class: '' },
    { path: '/etudiants', title: 'Etudiants',  icon:'pe-7s-users', class: '' },
    { path: '/enseignants', title: 'Enseignants',  icon:'pe-7s-study', class: '' },
    { path: '/specialites', title: 'Specialites',  icon:'pe-7s-user', class: '' },
    { path: '/cours', title: 'Cours',  icon:'pe-7s-folder', class: '' },
    { path: '/evaluations', title: 'Evaluations',  icon:'pe-7s-pen', class: '' },
    { path: '/notes', title: 'Notes',  icon:'pe-7s-albums', class: '' },
    { path: '/salles', title: 'Salles de cours',  icon:'pe-7s-home', class: '' },
    { path: '/etd', title: 'Emploie de temps',  icon:'pe-7s-news-paper', class: '' },
    { path: '/parametres', title: 'Parametres',  icon:'pe-7s-home', class: '' },
    { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
