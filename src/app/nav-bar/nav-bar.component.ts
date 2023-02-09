import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavItem } from './navItem.model';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  navItems: NavItem[] = [
    new NavItem('Sobre GanaSeguros', 'about'),
    new NavItem('Beneficios', 'gain'),
    new NavItem('Ayuda', 'help')
  ];
  @Output() featureSelected = new EventEmitter<string>;
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

  openUrl(){
    window.open('https://sociedadganadero--devtemp8.sandbox.my.site.com/Portalagentes/s', "_blank");
  }

}
