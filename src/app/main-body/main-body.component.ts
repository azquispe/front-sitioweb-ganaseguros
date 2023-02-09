import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  titulo:string = "Vida Individual";
  subtitulo:string = "Seguro de Vida a ser contratado por el mismo Asegurado o por un tercero con consentimiento del beneficiario.";
  contenido:string = "Consulta por el plan masivo";
  aplicacionId:number = 1002;
  documentoAdjuntoId:number = 1003;

  @Output() featureSelected = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }

}
