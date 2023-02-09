import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PolicyItem } from './policyItem.model';

@Component({
  selector: 'app-body-section2',
  templateUrl: './body-section2.component.html',
  styleUrls: ['./body-section2.component.scss']
})
export class BodySection2Component implements OnInit {

  nombreUsuario: string = '';
  nombrePoliza: string = '';
  nombreProducto: string = '';
  fechaInicio: string = '';
  fechaFin: string = '';
  polizaId: string = '';

  policyItems: PolicyItem[] = [];

  @Output() featureSelected = new EventEmitter<string>();
  @Output() policyIdSelected = new EventEmitter<string>();
  @Input() parentFoundData:{ value:any, id:string}[][] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

  ngOnChanges(){
    this.parentFoundData.forEach(policy =>{
      policy.forEach(element => {
        switch(element.id) {
          case 'nombreTomador': {
            this.nombreUsuario = element.value;
            break;
          }
          case 'nombrePoliza': {
            this.nombrePoliza = element.value;
            break;
          }
          case 'nombreProducto': {
            this.nombreProducto = element.value;
            break;
          }
          case 'polizaId': {
            this.polizaId = element.value;
            break;
          }
          case 'fechaInicio': {
            this.fechaInicio = element.value;
            this.fechaInicio = this.fechaInicio.substring(0, 10);
            break;
          }
          case 'fechaFin': {
            this.fechaFin = element.value;
            this.fechaFin = this.fechaFin.substring(0, 10);
            break;
          }
          default: {
            //this.nombreUsuario = '';
            break;
          }
        }
      });
      this.fechaInicio = this.fechaInicio + ' al ' + this.fechaFin;
      this.policyItems.push(new PolicyItem(this.nombrePoliza, this.nombreProducto, this.fechaInicio, this.polizaId));
    });
  }

  onPolicySelected(policyId:string){
    this.policyIdSelected.emit(policyId);
    this.onSelect('sec3');
  }
}
