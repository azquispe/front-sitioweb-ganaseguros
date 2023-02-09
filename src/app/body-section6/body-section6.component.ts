import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body-section6',
  templateUrl: './body-section6.component.html',
  styleUrls: ['./body-section6.component.scss']
})
export class BodySection6Component implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
