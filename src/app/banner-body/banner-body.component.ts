import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-banner-body',
  templateUrl: './banner-body.component.html',
  styleUrls: ['./banner-body.component.scss']
})
export class BannerBodyComponent implements OnInit {

  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
